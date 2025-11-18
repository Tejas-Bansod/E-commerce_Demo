import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/products';
import { ShoppingBag, ChevronRight, Truck, Shield, ArrowLeft, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/product/ProductGrid';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types/Product';

const amazonUrls: Record<number, string> = {
  1: 'https://www.amazon.com/your-actual-product-url',
  2: 'https://www.amazon.com/another-product-url',
  // Add more product URLs
};

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(id ? getProductById(Number(id)) : undefined);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(2);
  const imageRef = useRef<HTMLImageElement>(null);
  const magnifierRef = useRef<HTMLDivElement>(null);
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  // Update product when ID changes
  useEffect(() => {
    if (id) {
      const fetchedProduct = getProductById(Number(id));
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        // Reset selected size to first size when product changes
        setSelectedSize(fetchedProduct.sizes?.[0]?.size);
        // Reset quantity
        setQuantity(1);
        // Reset selected image
        setSelectedImage(0);
        // Get related products
        setRelatedProducts(getRelatedProducts(fetchedProduct, 3));
        // Update page title
        document.title = `${fetchedProduct.name} | Seven Hills Wholefoods`;
      } else {
        navigate('/products');
      }
    }
  }, [id, navigate]);
  
  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return <div className="container py-32 text-center">Loading product...</div>;
  }
  
  // Find price for selected size or use default price
  const currentPrice = selectedSize 
    ? product.sizes?.find(s => s.size === selectedSize)?.price || product.price
    : product.price;
  
  const handleAddToCart = () => {
    if (quantity > 10) {
      alert('Maximum quantity per product is 10 items.');
      return;
    }

    addToCart(product, quantity, selectedSize);
    setShowAddedToCart(true);
    setTimeout(() => setShowAddedToCart(false), 2000);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Redirect to Amazon after a short delay
    setTimeout(() => {
      const amazonUrl = amazonUrls[Number(id)];
      if (amazonUrl) {
        window.open(amazonUrl, '_blank');
      }
    }, 500);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
    setCursorPosition({ x: e.clientX - left, y: e.clientY - top });
  };

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };
  
  return (
    <div className="py-8">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center text-sm">
          <button onClick={() => navigate('/products')} className="text-neutral-500 hover:text-primary-600 flex items-center">
            <ArrowLeft size={14} className="mr-1" />
            Back to Products
          </button>
          <ChevronRight size={14} className="mx-2 text-neutral-400" />
          <span className="text-neutral-800">{product.name}</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div>
            <div 
              className="bg-white rounded-lg overflow-hidden mb-4 aspect-square relative group cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.img 
                ref={imageRef}
                key={selectedImage}
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Magnifier */}
              {showMagnifier && (
                <>
                  {/* Zoom Controls */}
                  <div className="hidden md:flex absolute top-4 right-4 gap-2 z-20">
                    <button
                      onClick={handleZoomOut}
                      className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                      disabled={zoomLevel <= 1}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      onClick={handleZoomIn}
                      className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                      disabled={zoomLevel >= 3}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>

                  {/* Magnifier Glass */}
                  <div
                    ref={magnifierRef}
                    className="hidden md:block absolute w-32 h-32 border-2 border-white rounded-full overflow-hidden pointer-events-none z-10 shadow-xl"
                    style={{
                      left: `${cursorPosition.x - 64}px`,
                      top: `${cursorPosition.y - 64}px`,
                    }}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${product.images[selectedImage]})`,
                        backgroundPosition: `${position.x}% ${position.y}%`,
                        backgroundSize: `${zoomLevel * 100}%`,
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                  </div>

                  {/* Zoom Level Indicator */}
                  <div className="hidden md:block absolute bottom-4 left-4 bg-white px-2 py-0.5 rounded-full text-xs font-medium text-gray-700 shadow-lg">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                </>
              )}

              {/* Mobile Zoom Hint */}
              <div className="md:hidden absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tap to Zoom
                </span>
              </div>
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index 
                        ? 'border-primary-600 scale-105' 
                        : 'border-transparent hover:border-primary-300'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {product.isNew && <span className="tag bg-secondary-600 text-white">New</span>}
              {product.isBestSeller && <span className="tag bg-accent-600 text-white">Best Seller</span>}
              {product.isOrganic && <span className="tag bg-primary-600 text-white">Organic</span>}
            </div>
            
            <h1 className="text-3xl font-serif font-bold mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18}
                    className={`${i < Math.floor(product.rating) ? 'fill-accent-500' : 'text-neutral-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-neutral-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.compareAtPrice && (
                <span className="text-neutral-500 line-through mr-2">₹{product.compareAtPrice.toFixed(2)}</span>
              )}
              {selectedSize && product.sizes?.find(s => s.size === selectedSize)?.sellingPrice ? (
                <span className="text-2xl font-semibold text-neutral-900">
                  ₹{product.sizes.find(s => s.size === selectedSize)?.sellingPrice?.toFixed(2)}
                </span>
              ) : (
                <span className="text-2xl font-semibold text-neutral-900">
                  ₹{product.sizes?.find(s => s.size === selectedSize)?.price?.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <p className="text-neutral-700">{product.description}</p>
            </div>
            
            {/* Size Selection if available */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-neutral-900 mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size.size)}
                      className={`px-4 py-2 rounded border font-medium text-sm ${
                        selectedSize === size.size
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'bg-white text-neutral-800 border-neutral-300 hover:border-primary-600'
                      }`}
                    >
                      {size.size}
                      <span className="block text-sm">
                        {size.sellingPrice ? (
                          <>
                            <span className="line-through text-neutral-500">₹{size.price.toFixed(2)}</span>
                            <span className="ml-1">₹{size.sellingPrice.toFixed(2)}</span>
                          </>
                        ) : (
                          <span>₹{size.price.toFixed(2)}</span>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-neutral-900 mb-3">Quantity</h3>
              <div className="flex items-center w-32 h-10 border border-neutral-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-full flex items-center justify-center text-neutral-600 hover:text-primary-600"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <div className="flex-1 h-full flex items-center justify-center border-x border-neutral-300">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-full flex items-center justify-center text-neutral-600 hover:text-primary-600"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart and Checkout */}
            <div className="mb-8 space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full btn btn-primary flex items-center justify-center relative overflow-hidden"
                aria-label={`Add ${product.name} to cart`}
              >
                <AnimatePresence>
                  {showAddedToCart ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute inset-0 flex items-center justify-center bg-green-600"
                    >
                      <Check className="w-6 h-6 mr-2" />
                      Added {quantity} item{quantity > 1 ? 's' : ''} to Cart
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center"
                    >
                      <ShoppingBag size={18} className="mr-2" />
                      Add to Cart
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`w-full btn btn-secondary flex items-center justify-center ${
                  isCheckingOut ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <AnimatePresence>
                  {isCheckingOut ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center"
                    >
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Redirecting to Amazon...
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5L1 10.5v2h3v-2zM13 0.55h-2L10.5 2h3L13 0.55zM20.45 4.46l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zM17.24 18.16l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zM12 5.5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM11 22.45h2L12.5 24h-3l1.5-1.55zM3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
                      </svg>
                      Checkout on Amazon
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
            
            {/* Shipping & Returns */}
            <div className="border-t border-neutral-200 pt-6 mb-6">
              <div className="flex mb-4">
                <Truck size={20} className="text-primary-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Free Shipping</h3>
                  <p className="text-sm text-neutral-600">Orders over ₹50 qualify for free shipping.</p>
                </div>
              </div>
              <div className="flex">
                <Shield size={20} className="text-primary-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-neutral-900 mb-1">Satisfaction Guarantee</h3>
                  <p className="text-sm text-neutral-600">30-day money back guarantee if you're not satisfied.</p>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="border-t border-neutral-200 pt-6">
              <h3 className="font-medium text-lg mb-4">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mb-16">
          <div className="border-b border-neutral-200">
            <div className="flex overflow-x-auto">
              <button className="px-6 py-4 font-medium text-primary-600 border-b-2 border-primary-600">
                Product Details
              </button>
              <button className="px-6 py-4 font-medium text-neutral-500 hover:text-neutral-800">
                Nutritional Information
              </button>
              <button className="px-6 py-4 font-medium text-neutral-500 hover:text-neutral-800">
                Reviews
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Description</h3>
                <p className="text-neutral-700 mb-6">{product.description}</p>
                
                <h3 className="font-medium text-lg mb-4">Ingredients</h3>
                <ul className="list-disc pl-5 space-y-1 text-neutral-700 mb-6">
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Nutritional Information</h3>
                <div className="border border-neutral-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Nutrient
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                          % Daily Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      {product.nutritionalInfo && Object.entries(product.nutritionalInfo).map(([nutrient, info], index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                            {nutrient}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                            {info.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-800">
                            {info.dailyValue || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <ProductGrid
              products={relatedProducts}
              title="You May Also Like"
              subtitle="Based on your current selection, we think you'll like these products too."
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;