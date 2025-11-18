import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-neutral-900">Eseentia</h4>
            <p className="text-neutral-600 leading-relaxed">
              Providing premium quality, sustainable wholefood products since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/eseentia.official/" className="text-neutral-600 bg-pink hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/profile.php?id=61576108148964" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://x.com/eseentia" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/in/eseentia-health-6bb192366" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://www.youtube.com/@Eseentia" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform" aria-label="Youtube"><Youtube size={20} /></a>
            </div>
          </div>
          
          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-neutral-900">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform">All Products</Link></li>
              <li><Link to="/products?category=tablets" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform">Spirulina Tablets</Link></li>
              <li><Link to="/products?category=powder" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform">Spirulina Powder</Link></li>
              <li><Link to="/products?category=capsules" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform">Spirulina Capsules</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-neutral-900">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform">About Us</Link></li>
              <li><Link to="/sustainability" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform">Sustainability</Link></li>
              <li><Link to="/blog" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform">Blog</Link></li>
              <li><Link to="/faq" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform">FAQ</Link></li>
              <li><Link to="/contact" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-neutral-900">Contact Us</h4>
            <div className="flex items-start space-x-3">
              <Phone size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
              <a href="tel:+919975105971" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200">+91 9975105971</a>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
              <div className="text-neutral-600 text-sm">
                <p className="font-medium">Business Address:</p>
                <p>Raitown, Flat no- B3-303, IC Chowk Hingna Road, Nagpur - 440016</p>
                <p className="font-medium mt-2">Office Address:</p>
                <p>Flat No. 03, Harihar Sahanlwas, Beside Dhandanla Infotech, Giripeth, Nagpur - 440010</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-8">
          <div className="h-64 rounded-lg overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076994379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1586000412513!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eseentia Location"
            ></iframe>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-6 border-t border-neutral-200 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">&copy; {currentYear} Eseentia. All rights reserved.</p>
            <div className="flex space-x-6">
              
              <Link to="/terms" className="text-neutral-500 text-sm hover:text-primary-600 transition-colors duration-200">Terms of Service</Link>
              <Link to="/shipping" className="text-neutral-500 text-sm hover:text-primary-600 transition-colors duration-200">Shipping</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;