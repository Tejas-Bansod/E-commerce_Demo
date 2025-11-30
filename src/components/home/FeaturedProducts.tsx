import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  // ✅ Only show Spirulina, Moringa, Wheatgrass (partial match allowed)
  const featuredProducts = products.filter(product => {
    const name = product.name.toLowerCase();
    return (
      name.includes('spirulina') ||
      name.includes('moringa') ||
      name.includes('wheatgrass')
    );
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // roughly one card
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="w-full px-4 md:px-16 relative group">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">
            Our major products: Spirulina, Moringa, and Wheatgrass- carefully selected for quality and potency.
          </p>
        </div>

        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow hover:bg-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Product row */}
        <div
          ref={scrollRef}
          className="flex space-x-6 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {featuredProducts.map((product, index) => (
            <div key={index} className="flex-none w-64 shrink-0 snap-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow hover:bg-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 whitespace-nowrap"
          >
            View All Products
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
