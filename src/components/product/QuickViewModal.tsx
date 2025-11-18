import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../../types/Product';
import { motion, AnimatePresence } from 'framer-motion';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const MODAL_WIDTH = 400; // Changed width to 200

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const modalRef = useRef<HTMLDivElement | null>(null);

  // ✅ Calculate position above selected product
  useEffect(() => {
    if (isOpen && product && modalRef.current) {
      const targetElement = document.getElementById(`product-${product.id}`);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        setPosition({
          top: window.scrollY + rect.top + rect.height / 2 - MODAL_WIDTH / 2, // Center vertically over card
          left: rect.left + rect.width / 2 - MODAL_WIDTH / 2, // Center horizontally over card
        });
      }
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          className="absolute z-50 bg-white shadow-lg rounded-xl border border-gray-300"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            width: `${MODAL_WIDTH}px`,
            minHeight: '200px', // Optional: minimum height
            // Remove height and overflow
            paddingBottom: '32px', // Add space at the bottom for visual completeness
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
            onClick={onClose}
          >
            <X size={20} />
          </button>

          {/* Product Image */}
          <div className="w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-xl">
            <img
              src={product.images && product.images.length > 0 ? product.images[0] : '/placeholder.png'}
              alt={product.name}
              className="object-contain max-h-full max-w-full"
            />
          </div>

          {/* Product Details */}
          <div className="p-4 pb-8"> {/* Add extra bottom padding */}
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-3">₹{product.price}</p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => onAddToCart(product, quantity)}
              className="w-full mt-5 bg-black text-white py-2 rounded-lg hover:bg-gray-800"
            >
              Add to Cart ({quantity})
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;