import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Eye, BarChart2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/Product';
import product1 from '../../images/product/powder.png';
import product2 from '../../images/product/tablets.png';
import product3 from '../../images/product/alfalfa powder.png';
import product4 from  '../../images/product/capsules.png';
import product5 from  '../../images/product/barleys grass.png';
import product6 from  '../../images/product/Moringa.png';
import product7 from  '../../images/product/MoringaC.png';
import product8 from  '../../images/product/MoringaT.png';

export const products: Product[] = [
  {
    id: 1,
    name: "Spirulina Powder",
    description: "Premium quality spirulina powder for optimal nutrition",
    price: 449,
    compareAtPrice: 599,
    images: [product1],
    rating: 4.5,
    reviewCount: 128,
    category: "powder",
    tags: ["organic", "superfood"],
    features: ["100% Natural", "Rich in Protein", "High in Nutrients"],
    stock: 100,
    sku: "SP001",
    isNew: true,
    isBestSeller: true,
    isOrganic: true
  },
  {
    id: 2,
    name: "Spirulina Capsules",
    description: "Easy-to-swallow spirulina capsules for daily nutrition",
    price: 449,
    compareAtPrice: 599,
    images: [product4],
    rating: 4.8,
    reviewCount: 95,
    category: "capsules",
    tags: ["organic", "convenient"],
    features: ["Easy to Take", "No Taste", "Portable"],
    stock: 150,
    sku: "SC001",
    isBestSeller: true,
    isOrganic: true
  },
  {
    id: 3,
    name: "Spirulina Tablets",
    description: "Compressed spirulina tablets for convenient consumption",
    price: 1299.99,
    compareAtPrice: 1444.99,
    images: [product2],
    rating: 4.6,
    reviewCount: 82,
    category: "tablets",
    tags: ["organic", "tablets"],
    features: ["Compressed Form", "Easy to Store", "Long Shelf Life"],
    stock: 200,
    sku: "ST001",
    isNew: true,
    isOrganic: true
  },
  {
    id: 4,
    name: "Moringa Powder",
    description: "Pure moringa powder for natural nutrition",
    price: 599,
    compareAtPrice: 799,
    images: [product6],
    rating: 4.7,
    reviewCount: 156,
    category: "powder",
    tags: ["organic", "superfood"],
    features: ["100% Natural", "Rich in Vitamins", "Antioxidant"],
    stock: 120,
    sku: "MP001",
    isNew: true,
    isOrganic: true
  },
  {
    id: 5,
    name: "Moringa Capsules",
    description: "Convenient moringa capsules for daily use",
    price: 349,
    compareAtPrice: 499,
    images: [product7],
    rating: 4.4,
    reviewCount: 73,
    category: "capsules",
    tags: ["organic", "convenient"],
    features: ["Easy to Take", "No Taste", "Portable"],
    stock: 180,
    sku: "MC001",
    isOrganic: true
  },
  {
    id: 6,
    name: "Moringa Tablets",
    description: "Compressed moringa tablets for easy consumption",
    price: 399.99,
    compareAtPrice: 459.99,
    images: [product8],
    rating: 4.5,
    reviewCount: 91,
    category: "tablets",
    tags: ["organic", "tablets"],
    features: ["Compressed Form", "Easy to Store", "Long Shelf Life"],
    stock: 160,
    sku: "MT001",
    isOrganic: true
  },
  {
    id: 7,
    name: "Barleys Grass Powder",
    description: "Pure barley grass powder for natural nutrition",
    price: 349,
    compareAtPrice: 499,
    images: [product5],
    rating: 4.6,
    reviewCount: 112,
    category: "powder",
    tags: ["organic", "superfood"],
    features: ["100% Natural", "Rich in Chlorophyll", "Alkaline"],
    stock: 140,
    sku: "BGP001",
    isBestSeller: true,
    isOrganic: true
  },
  {
    id: 8,
    name: "Alfalfa Leaves Powder",
    description: "Pure alfalfa leaves powder for natural nutrition",
    price: 349,
    compareAtPrice: 499,
    images: [product3],
    rating: 4.7,
    reviewCount: 88,
    category: "powder",
    tags: ["organic", "superfood"],
    features: ["100% Natural", "Rich in Minerals", "Digestive Support"],
    stock: 130,
    sku: "ALP001",
    isOrganic: true
  }
];

// Responsive breakpoints for number of visible items
const getVisibleCount = () => {
  if (window.innerWidth < 640) return 1; // mobile
  if (window.innerWidth < 768) return 2; // sm
  if (window.innerWidth < 1024) return 3; // md
  if (window.innerWidth < 1280) return 4; // lg
  return 6; // xl and up
};

// Quick View Modal Component
const QuickViewModal = ({ product, isOpen, onClose }: { product: Product | null; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {/* Product Image */}
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full sm:w-1/2">
                <div className="relative aspect-square">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                  />
                  {product.compareAtPrice && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left w-full sm:w-1/2">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-4">
                  {product.name}
                </h3>
                
                <div className="mt-4 space-y-4">
                  {/* Price */}
                  {/* Price */}
<div className="flex items-center gap-2">
  <span className="text-2xl font-bold text-gray-900">
    ₹{product.price.toFixed(2)}
  </span>
  {product.compareAtPrice && (
    <span className="text-lg text-gray-500 line-through">
      ₹{product.compareAtPrice.toFixed(2)}
    </span>
  )}
</div>


                  {/* Description */}
                  <div className="text-gray-600">
                    <p className="text-sm">
                      Experience the premium quality of our {product.name.toLowerCase()}. 
                      Made with the finest ingredients and packed with essential nutrients.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>100% Natural Ingredients</li>
                      <li>Premium Quality</li>
                      <li>Rich in Nutrients</li>
                      <li>Easy to Consume</li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <button
                      onClick={() => {
                        // Add to cart logic here
                        onClose();
                      }}
                      className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => {
                        // Buy now logic here
                        onClose();
                      }}
                      className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel = () => {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeProduct, setActiveProduct] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showQuickView, setShowQuickView] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [compareItems, setCompareItems] = useState<number[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = products.length - visibleCount;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const handleQuickView = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQuickView(productId);
  };

  const handleCloseQuickView = () => {
    setShowQuickView(null);
  };

  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (product) {
      // Use the first size if available, otherwise use base price
      const selectedSize = product.sizes?.[0]?.size;
      addToCart(product, 1, selectedSize);
    }
  };

  const handleCompare = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    e.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (product) {
      setCompareItems(prev => [...prev, productId]);
    }
  };

  return (
    <div className="relative w-full mx-auto px-2 sm:px-4 py-4 sm:py-8 bg-white">
      <div 
        ref={carouselRef}
        className="relative md:overflow-hidden overflow-x-auto scroll-smooth"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex flex-nowrap md:transition-transform md:duration-300 md:ease-in-out min-w-full"
          style={window.innerWidth >= 768 ? { transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` } : {}}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-shrink-0 px-1 sm:px-2 select-none"
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
              <motion.div 
                className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl"
                onMouseEnter={() => setActiveProduct(product.id)}
                onMouseLeave={() => setActiveProduct(null)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div 
                  className="relative aspect-square cursor-pointer touch-manipulation select-none"
                  onClick={() => handleProductClick(product.id)}
                >
                  <motion.img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 sm:p-4 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.4 }
                    }}
                    draggable="false"
                  />
                  {product.compareAtPrice && (
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-red-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs sm:text-sm pointer-events-none">
                      -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                    </div>
                  )}

                  {/* Action Icons Overlay - Bottom */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 p-3 bg-gradient-to-t from-black/60 to-transparent"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: activeProduct === product.id ? 0 : 20,
                      opacity: activeProduct === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      onClick={(e) => handleQuickView(e, product.id)}
                      className="bg-white/90 backdrop-blur-sm text-primary-800 p-2 sm:p-2.5 rounded-full shadow-md hover:bg-primary-600 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Quick View"
                    >
                      <Eye size={18} className="sm:w-5 sm:h-5" />
                    </motion.button>

                    <motion.button
                      onClick={(e) => handleAddToCart(e, product.id)}
                      className="bg-white/90 backdrop-blur-sm text-primary-800 p-2 sm:p-2.5 rounded-full shadow-md hover:bg-primary-600 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Add to Cart"
                    >
                      <ShoppingBag size={18} className="sm:w-5 sm:h-5" />
                    </motion.button>

                    <motion.button
                      onClick={(e) => handleCompare(e, product.id)}
                      className="bg-white/90 backdrop-blur-sm text-primary-800 p-2 sm:p-2.5 rounded-full shadow-md hover:bg-primary-600 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Compare Product"
                    >
                      <BarChart2 size={18} className="sm:w-5 sm:h-5" />
                    </motion.button>
                  </motion.div>
                </div>
                <div className="p-2 sm:p-4">
                  <h3 className="text-xs sm:text-sm font-medium mb-1 truncate text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      ₹{product.price.toFixed(2)}
                    </span>
                    {product.compareAtPrice && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through">
                        ₹{(product.compareAtPrice).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        
        {isHovering && window.innerWidth >= 768 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      
      {/* Quick View Modal */}
      <QuickViewModal
        product={products.find(p => p.id === showQuickView) || null}
        isOpen={showQuickView !== null}
        onClose={handleCloseQuickView}
      />
    </div>
  );
};

export default ProductCarousel;