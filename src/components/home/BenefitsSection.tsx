import React from 'react';
import { Shield, Award, Heart, Zap, Leaf, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg p-6 shadow-sm border border-neutral-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-primary-600 mb-4 bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-serif font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm">{description}</p>
    </motion.div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Heart size={24} />,
      title: "Nutrient-Dense Superfood",
      description: "Packed with protein, vitamins, minerals, and antioxidants to support overall health and wellbeing."
    },
    {
      icon: <Zap size={24} />,
      title: "Natural Energy Boost",
      description: "Provides sustained energy without the crashes associated with caffeine or sugar."
    },
    {
      icon: <Shield size={24} />,
      title: "Immune Support",
      description: "Rich in phycocyanin and antioxidants that help strengthen your body's natural defenses."
    },
    {
      icon: <Leaf size={24} />,
      title: "Sustainable Harvesting",
      description: "Our spirulina is grown using sustainable methods with minimal environmental impact."
    },
    {
      icon: <Award size={24} />,
      title: "Premium Quality",
      description: "Rigorously tested for purity and potency to ensure you get the highest quality product."
    },
    {
      icon: <Users size={24} />,
      title: "Community Impact",
      description: "We partner with local communities to create sustainable livelihoods through spirulina farming."
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-medium">Why Choose Our Spirulina</span>
          <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">The Benefits of Seven Hills Spirulina</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Our premium quality spirulina offers numerous health benefits and is sustainably produced with the highest standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;