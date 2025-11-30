import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, BarChart2 } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import QuickViewModal from './QuickViewModal';
import ReactDOM from 'react-dom';

interface ProductCardProps {
  product: Product;
  onCompare?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onCompare }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsQuickViewOpen(true);
  };


  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    onCompare?.(product);
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount);

  return (
    <>
      <motion.div
        id={`product-${product.id}`}
        className="product-card group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 h-full relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <Link to={`/products/${product.id}`} className="block h-full flex flex-col">
          <div className="relative overflow-hidden rounded-t-lg aspect-square">
            <motion.img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-contain p-2 sm:p-3 md:p-4 bg-white"
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            />

            {/* Action Icons */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 p-3 bg-gradient-to-t from-black/60 to-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={handleQuickView}
                className="bg-white/90 backdrop-blur-sm text-primary-800 p-2 sm:p-2.5 rounded-full shadow-md hover:bg-primary-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Quick View"
              >
                <Eye size={18} className="sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  // Use the first size if available, otherwise use base price
                  const selectedSize = product.sizes?.[0]?.size;
                  addToCart(product, 1, selectedSize);
                }}
                className="bg-white/90 backdrop-blur-sm text-primary-800 p-2 sm:p-2.5 rounded-full shadow-md hover:bg-primary-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Add to Cart"
              >
                <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                onClick={handleCompare}
                className="bg-white/90 backdrop-blur-sm text-primary-800 p-2 sm:p-2.5 rounded-full shadow-md hover:bg-primary-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Compare Product"
              >
                <BarChart2 size={18} className="sm:w-5 sm:h-5" />
              </motion.button>
            </motion.div>

            {/* Tags */}
            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1.5 sm:gap-2">
              <AnimatePresence>
                {product.isNew && (
                  <motion.span
                    className="tag bg-secondary-600 text-white text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    New
                  </motion.span>
                )}
                {product.isBestSeller && (
                  <motion.span
                    className="tag bg-accent-600 text-white text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    Best Seller
                  </motion.span>
                )}
                {product.isOrganic && (
                  <motion.span
                    className="tag bg-primary-600 text-white text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    Organic
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="p-2 sm:p-3 md:p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-1 sm:mb-1.5">
              <motion.h3
                className="font-medium text-neutral-800 text-xs sm:text-sm md:text-base line-clamp-2"
                whileHover={{ color: "#4F46E5" }}
                transition={{ duration: 0.2 }}
              >
                {product.name}
              </motion.h3>
              <motion.div
                className="flex flex-col items-end ml-2 flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {product.compareAtPrice && (
                  <span className="text-xs text-neutral-400 line-through">
                    {formatCurrency(product.compareAtPrice)}
                  </span>
                )}
                <motion.span
                  className="font-medium text-neutral-900 text-xs sm:text-sm md:text-base"
                  whileHover={{ color: "#4F46E5" }}
                  animate={{
                    scale: isHovered ? [1, 1.05, 1] : 1
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: isHovered ? Infinity : 0,
                    repeatType: "reverse"
                  }}
                >
                  {formatCurrency(product.price)}
                </motion.span>
              </motion.div>
            </div>

            <motion.p
              className="text-xs text-neutral-500 mb-1 sm:mb-1.5"
              whileHover={{ color: "#4F46E5" }}
              transition={{ duration: 0.2 }}
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </motion.p>

            <div className="flex items-center mt-auto">
              <div className="flex text-accent-400">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? 'text-accent-500' : 'text-neutral-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <motion.span
                className="ml-1 text-xs text-neutral-500"
                whileHover={{ color: "#4F46E5" }}
                transition={{ duration: 0.2 }}
              >
                ({product.reviewCount})
              </motion.span>
            </div>
          </div>
        </Link>
        <button
          className="absolute bottom-2 right-2 bg-primary-600 text-white px-3 py-1 rounded"
          onClick={handleQuickView}
        >
          View Product
        </button>
      </motion.div>

      {isQuickViewOpen &&
        ReactDOM.createPortal(
          <QuickViewModal
            product={product}
            isOpen={isQuickViewOpen}
            onClose={() => setIsQuickViewOpen(false)}
            onAddToCart={addToCart}
          />,
          document.body
        )}
    </>
  );
};

export default ProductCard;
