import { useParams, useNavigate } from 'react-router-dom';
import { products } from './prodcutcarousel';
import { useState, useRef } from 'react';

// Add variant type definition
type Variant = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
  size?: string;
};

// Add sample variants data
const productVariants: Record<number, Variant[]> = {
  1: [
    { id: 1, name: 'Small', price: 29.99, stock: 10, size: 'S' },
    { id: 2, name: 'Medium', price: 34.99, stock: 15, size: 'M' },
    { id: 3, name: 'Large', price: 39.99, stock: 8, size: 'L' },
  ],
  2: [
    { id: 1, name: 'Red', price: 24.99, stock: 12, color: '#FF0000' },
    { id: 2, name: 'Blue', price: 24.99, stock: 8, color: '#0000FF' },
    { id: 3, name: 'Green', price: 24.99, stock: 15, color: '#00FF00' },
  ],
};

// Add Amazon URL type to product data
type ProductVariant = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
  size?: string;
};

// Add sample Amazon URLs for products
const amazonUrls: Record<number, string> = {
  1: 'https://www.amazon.com/dp/B08L5TNJHG', // Example Amazon product URL
  2: 'https://www.amazon.com/dp/B08L5TNJHG', // Example Amazon product URL
  // Add more product URLs as needed
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [showVariants, setShowVariants] = useState(false);
  
  // Magnifier states
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const magnifierRef = useRef<HTMLDivElement>(null);

  // Calculate discount percentage if compareAtPrice exists
  const discountPercentage = product?.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const handleImageClick = () => {
    setIsModalOpen(true);
    setZoomLevel(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  const handleVariantSelect = (variant: Variant) => {
    setSelectedVariant(variant);
    setShowVariants(false);
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

  const handleAmazonRedirect = () => {
    const amazonUrl = amazonUrls[Number(id)];
    if (amazonUrl) {
      window.open(amazonUrl, '_blank');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const variants = productVariants[product.id] || [];
  const mainImage = product.images[0];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
  {/* Modal for image zoom */}
  {isModalOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-all">
      <div className="absolute inset-0" onClick={handleCloseModal} />
      <div className="relative z-10 max-w-full max-h-full flex flex-col items-center justify-center p-4">
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 focus:outline-none"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={handleZoomOut}
            className="bg-white text-gray-800 rounded-full p-2 shadow hover:bg-gray-100 focus:outline-none"
            disabled={zoomLevel <= 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="text-white font-semibold text-lg select-none">{Math.round(zoomLevel * 100)}%</span>
          <button
            onClick={handleZoomIn}
            className="bg-white text-gray-800 rounded-full p-2 shadow hover:bg-gray-100 focus:outline-none"
            disabled={zoomLevel >= 3}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        <div className="overflow-auto max-w-[90vw] max-h-[80vh] flex items-center justify-center">
          <img
            src={mainImage}
            alt={product.name}
            style={{ transform: `scale(${zoomLevel})` }}
            className="transition-transform duration-200 rounded-lg shadow-lg max-w-full max-h-[70vh] object-contain"
          />
        </div>
      </div>
    </div>
  )}

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <button
      onClick={() => navigate('/')}
      className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
      Back to Products
    </button>

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Product Image Section */}
        <div 
          className="relative aspect-square group cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleImageClick}
        >
          <img
            ref={imageRef}
            src={mainImage}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          {discountPercentage > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
              -{discountPercentage}%
            </div>
          )}
          {/* Magnifier */}
          {showMagnifier && (
            <div
              ref={magnifierRef}
              className="hidden md:block absolute w-40 h-40 border-2 border-gray-300 rounded-full overflow-hidden pointer-events-none z-10"
              style={{
                left: `${cursorPosition.x - 80}px`,
                top: `${cursorPosition.y - 80}px`,
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${mainImage})`,
                  backgroundPosition: `${position.x}% ${position.y}%`,
                  backgroundSize: '200%',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-blue-600">
                ₹{product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ₹{product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Variant Selection */}
          <div className="mb-8">
            <button
              onClick={() => setShowVariants(!showVariants)}
              className="w-full text-left px-4 py-3 border border-gray-300 rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-700">
                  {selectedVariant ? `Selected: ${selectedVariant.name}` : 'Select Variant'}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${showVariants ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {showVariants && (
              <div className="mt-2 border border-gray-200 rounded-lg overflow-hidden">
                {variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => handleVariantSelect(variant)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                      selectedVariant?.id === variant.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        {variant.color && (
                          <div
                            className="w-6 h-6 rounded-full border border-gray-300"
                            style={{ backgroundColor: variant.color }}
                          />
                        )}
                        <span className="text-gray-700">{variant.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-600">₹{variant.price.toFixed(2)}</span>
                        <span className="text-sm text-gray-500">Stock: {variant.stock}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-gray-900">Product Description</h2>
            <p className="text-gray-600">
              Experience the natural benefits of our premium product — crafted with care to deliver quality and value. Perfect for everyday use.
            </p>
          </div>

          {/* Amazon Redirect */}
          <button
            onClick={handleAmazonRedirect}
            className="mt-auto inline-flex justify-center items-center px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Buy on Amazon
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ProductDetails; 