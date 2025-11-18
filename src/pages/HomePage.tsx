import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BenefitsSection from '../components/home/BenefitsSection';
import TestimonialSection from '../components/home/TestimonialSection';
import NewsletterSection from '../components/home/NewsletterSection';
import ProductCarousel from '../components/product/prodcutcarousel';
import ProductVariants from '../components/home/ProductVariants';
import Video from '../components/testimonials/VideoTestimonials'


const HomePage: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Eseentia | Spirulina Collection';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <ProductCarousel />
      <ProductCarousel />
      <ProductCarousel />
      <ProductVariants />
      <BenefitsSection />
      <Video/>
      <TestimonialSection />
      <NewsletterSection />
      
    </div>
  );
};

export default HomePage;