import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "I've tried many spirulina products, but Seven Hills' quality is unmatched. It has become an essential part of my daily routine, and I've noticed significant improvements in my energy and overall wellbeing.",
    author: "Sarah Johnson",
    role: "Fitness Instructor",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 2,
    content: "The Hawaiian Spirulina has been a game-changer for my immune system. As a healthcare worker, I need all the support I can get, and I've noticed fewer sick days since adding this to my regimen.",
    author: "Michael Chen",
    role: "Registered Nurse",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    id: 3,
    content: "I love that Seven Hills is committed to sustainability. Knowing that my supplement choices are environmentally responsible gives me peace of mind, and the quality is exceptional.",
    author: "Emma Rodriguez",
    role: "Environmental Scientist",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-medium">Testimonials</span>
          <h2 className="text-3xl font-serif font-semibold mt-2 mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Discover how our spirulina products have positively impacted the lives of our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-neutral-50 p-6 rounded-lg border border-neutral-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? "fill-accent-500 text-accent-500" : "text-neutral-300"}
                  />
                ))}
              </div>
              <p className="text-neutral-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-neutral-900">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;