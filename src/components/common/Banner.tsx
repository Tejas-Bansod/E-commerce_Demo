import React from 'react';
import { motion } from 'framer-motion';

interface BannerProps {
  image: string;
  title: string;
  subtitle?: string;
  height?: 'sm' | 'md' | 'lg';
}

const Banner: React.FC<BannerProps> = ({ 
  image, 
  title, 
  subtitle,
  height = 'md' 
}) => {
  const heightClasses = {
    sm: 'h-[200px] md:h-[300px]',
    md: 'h-[300px] md:h-[400px]',
    lg: 'h-[400px] md:h-[500px]'
  };

  return (
    <div className={`relative overflow-hidden ${heightClasses[height]}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-base sm:text-lg md:text-xl opacity-90 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 60H240C480 60 720 0 960 0C1200 0 1320 60 1440 60V120H0V60Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Banner; 