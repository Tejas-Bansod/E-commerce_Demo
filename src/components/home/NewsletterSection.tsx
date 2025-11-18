import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // In a real app, this would send the email to a server
      setIsSubmitted(true);
      setEmail('');
    }
  };
  
  return (
    <section className="bg-primary-900 py-16 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="300" fill="white" />
            <circle cx="600" cy="200" r="150" fill="white" />
            <circle cx="200" cy="600" r="200" fill="white" />
          </svg>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-primary-800 text-white rounded-full p-3 mb-6">
            <Mail size={24} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white mb-4">
            Stay Updated with Seven Hills
          </h2>
          
          <p className="text-primary-200 mb-8">
            Subscribe to our newsletter for exclusive discounts, new product announcements, and health tips related to spirulina.
          </p>
          
          {isSubmitted ? (
            <div className="bg-primary-800 rounded-lg p-6 animate-fadeIn">
              <div className="inline-flex items-center justify-center bg-primary-600 text-white rounded-full p-2 mb-4">
                <Check size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Thank you for subscribing!
              </h3>
              <p className="text-primary-200">
                You'll be the first to know about our new products and special offers.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-md border border-primary-700 bg-primary-800 text-white placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-900 font-medium rounded-md hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-900"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-primary-300 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;