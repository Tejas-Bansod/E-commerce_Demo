import React from 'react';
import VideoTestimonials from '../components/testimonials/VideoTestimonials';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Customer Success Stories
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Hear from our customers about their experiences with our products and services
          </p>
        </div>
        
        <VideoTestimonials />
        
        {/* Additional Content */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Join Our Happy Customers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the same level of satisfaction and quality service
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage; 