import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../../data/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import banner1 from  '../../images/banner/banner2.png'
import banner2 from  '../../images/banner/banner1.png'
import banner3 from  '../../images/banner/banner3.png'
import banner4 from  '../../images/banner/banner4.png'
import banner5 from  '../../images/banner/banner5.png'


const ProductVariants: React.FC = () => {
  const variants = [
    {
      title: "Premium Powder",
      description: "Our finest spirulina powder, perfect for smoothies and drinks",
      image: banner1,
      link: "/products?category=powder"
    },
    {
      title: "Easy to Take Tablets",
      description: "Convenient tablets for your daily nutrition needs",
      image: banner4,
      link: "/products?category=tablets"
    },
    {
      title: "Vegetarian Capsules",
      description: "Pure spirulina in easy-to-swallow vegetarian capsules",
      image: banner3,
      link: "/products?category=capsules"
    },
    {
      title: "Wheatgrass Powder",
      description: "High in Calcium for strong bones and teeth",
      image: banner5,
      link: "/products?category=capsules"
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-medium">Product Forms</span>
          <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">Choose Your Perfect Match</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Our spirulina comes in various forms to suit your lifestyle and preferences.
          </p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.variant-button-prev',
              nextEl: '.variant-button-next',
            }}
            className="rounded-xl overflow-hidden"
          >
            {variants.map((variant, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-[500px]">
                  <img 
                    src={variant.image} 
                    alt={variant.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-transparent">
                    <div className="h-full flex items-center">
                      <div className="max-w-lg px-12">
                        <h3 className="text-4xl font-serif font-semibold text-white mb-4">
                          {variant.title}
                        </h3>
                        <p className="text-white/90 text-lg mb-8">
                          {variant.description}
                        </p>
                        <Link 
                          to={variant.link}
                          className="inline-flex items-center bg-white text-primary-800 px-6 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors"
                        >
                          Explore Products
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="variant-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="variant-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductVariants;