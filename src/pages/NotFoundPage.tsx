import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Page Not Found | Seven Hills Wholefoods';
  }, []);
  
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container max-w-2xl text-center py-16">
        <span className="text-6xl mb-6 inline-block">🌿</span>
        <h1 className="text-4xl font-serif font-bold mb-4">Page Not Found</h1>
        <p className="text-neutral-600 text-lg mb-8">
          We couldn't find the page you're looking for. It might have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn btn-primary inline-flex items-center justify-center">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
          <Link to="/products" className="btn btn-outline inline-flex items-center justify-center">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;