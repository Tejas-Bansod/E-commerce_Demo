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
      <div className="container-lg relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">
            Our major products: Spirulina, Moringa, and Wheatgrass- carefully selected for quality and potency.
          </p>
        </div>

        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Product row - arrows only, no mouse scroll */}
        <div
          ref={scrollRef}
          className="flex space-x-6 pb-4 scroll-smooth max-w-full"
          style={{
            overflow: 'hidden', // ❌ No overflow-x-auto
            paddingRight: '1rem',
          }}
        >
          {featuredProducts.map((product, index) => (
            <div key={index} className="flex-none w-64 shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow hover:bg-white"
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
