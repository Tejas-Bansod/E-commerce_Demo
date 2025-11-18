import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Subtitles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import banner1 from  '../../images/banner/banner1.png'
import banner2 from  '../../images/banner/banner2.png'
import banner3 from  '../../images/banner/banner3.png'
import banner4 from  '../../images/banner/banner4.png'
import banner5 from  '../../images/banner/banner5.png'

const Hero: React.FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const slides = [
    {
      image: banner2,
      title: "Premium Spirulina Powder",
      subtitle: "✔ 100% Organic  ✔ Rich in Protein & Antioxidants ✔ Immunity & Energy Booster"
    },
    {
      image: banner4,
      title: "Premium Spirulina Tablets",
      subtitle: "Each batch of our spirulina is rigorously tested to ensure optimal nutrient content and purity."
    },
    {
      image: banner3,
      title: "Spirulina Capsules With Moringa Capsules",
      subtitle: "Discover our premium, organic spirulina products - sustainably harvested and packed with essential nutrients to support your health and wellness journey."
    },
    {
      image: banner5,
      title: "Wheatgrass Powder",
      
      subtitle:"High in Zinc which is a great antioxidant - protecting cells from oxidative stress"
    },
  ];

  return (
    <div className="relative overflow-hidden group">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }
        }}
        className="h-[85vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt="Spirulina background" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-primary-900/50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 container h-full flex flex-col justify-center text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <motion.span 
                    className="inline-block mb-3 sm:mb-4 text-xs uppercase tracking-widest font-semibold bg-primary-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Premium Spirulina Collection
                  </motion.span>
                  
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {slide.title}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8 max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Link to="/products" className="btn btn-primary text-sm sm:text-base px-6 py-2.5 sm:py-3">
                      Shop Collection
                    </Link>
                    <Link to="/about" className="btn bg-white text-primary-800 hover:bg-neutral-100 text-sm sm:text-base px-6 py-2.5 sm:py-3">
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 top-1/2 z-20 flex justify-between items-center px-4 sm:px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            ref={navigationPrevRef}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            ref={navigationNextRef}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </Swiper>

      {/* Wave decoration at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 60H240C480 60 720 0 960 0C1200 0 1320 60 1440 60V120H0V60Z" fill="white"/>
        </svg>
      </div> */}
    </div>
  );
};

export default Hero;