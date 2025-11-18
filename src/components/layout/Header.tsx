import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartSidebar from '../cart/CartSidebar';
import SearchBar from '../common/SearchBar';
import logo from '../../images/logoNew2.jpeg';

const Header: React.FC<{ onLoginClick: () => void }> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { totalItems, toggleCart, isCartOpen } = useCart();
  const location = useLocation();
  const submenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Remove scroll event listener since we don't need it anymore
  useEffect(() => {
    // No need for scroll listener
    return () => {};
  }, []);

  const menuItems = [
  {
    name: 'Products',
    path: '/products',
    submenu: [
      { name: 'All Products', path: '/products' },
      { name: 'New Arrivals', path: '/products/new' },
      { name: 'Best Sellers', path: '/products/best-sellers' },
      { name: 'Categories', path: '/products/categories' },
    ]
  },
  {
    name: 'About',
    path: '/about',
    submenu: [
      { name: 'Our Story', path: '/about' },
    ]
  },
  {
    name: 'Support',
    path: '/support',
    submenu: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Shipping', path: '/shipping' },
      { name: 'Returns', path: '/returns' },
      { name: 'Privacy Policy', path: '/privacy-policy' }, // added
    ]
  }
];


  return (
    <>
      <header 
        className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md py-2 w-full"
      >
        <div className="container-lg mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px] transition-all duration-300 group-hover:scale-105">
                <img 
                  src={logo}
                  alt="Eseentia Logo"
                  className="w-full h-full object-contain"
                  style={{borderRadius: "5px"}}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" ref={submenuRef}>
              <Link 
                to="/" 
                className="text-neutral-800 hover:text-primary-600 font-semibold text-xl sm:text-2xl transition-all duration-300 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="flex items-center text-neutral-800 hover:text-primary-600 font-semibold text-xl sm:text-2xl transition-all duration-300 relative group"
                  >
                    {item.name}
                    <ChevronDown size={24} className="ml-1.5 transition-transform duration-300 group-hover:rotate-180" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  
                  {/* Desktop Submenu */}
                  <div className={`absolute top-full left-0 w-80 bg-white shadow-xl rounded-lg py-3 transition-all duration-300 transform origin-top ${
                    activeSubmenu === item.name 
                      ? 'opacity-100 scale-100 translate-y-1' 
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-lg sm:text-xl text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-all duration-200 hover:translate-x-1"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Desktop Utilities */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <SearchBar onClose={() => setIsSearchOpen(false)} />
              </div>
              <button
                onClick={onLoginClick}
                className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
                aria-label="Account"
              >
                <User size={26} />
              </button>
              <button 
                onClick={toggleCart} 
                className="relative text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
                aria-label="Shopping cart"
              >
                <ShoppingBag size={26} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform scale-100 transition-transform duration-300 hover:scale-110">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button 
                onClick={toggleSearch}
                className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
                aria-label="Search"
              >
                <Search size={24} />
              </button>
              <button 
                onClick={toggleCart} 
                className="relative text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
                aria-label="Shopping cart"
              >
                <ShoppingBag size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button 
                onClick={toggleMenu} 
                className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Menu</h2>
              <button
                onClick={toggleMenu}
                className="text-neutral-400 hover:text-neutral-600"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-4">
              <Link 
                to="/" 
                className="block py-4 text-neutral-800 hover:text-primary-600 font-semibold border-b border-neutral-100 transition-all duration-300 hover:translate-x-2 text-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
              
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-neutral-100">
                  <button
                    onClick={() => {
                      // Toggle submenu without closing menu
                      toggleSubmenu(item.name);
                    }}
                    className="w-full flex items-center justify-between py-4 text-neutral-800 hover:text-primary-600 font-semibold transition-all duration-300 text-lg"
                  >
                    {item.name}
                    <ChevronDown 
                      size={24} 
                      className={`transition-transform duration-300 ${
                        activeSubmenu === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Mobile Submenu */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeSubmenu === item.name ? 'max-h-96' : 'max-h-0'
                  }`}>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block pl-6 py-4 text-lg text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-all duration-300 hover:translate-x-2"
                        onClick={() => {
                          // Close menu when clicking submenu item
                          toggleMenu();
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <Link 
                to="/account" 
                className="block py-4 text-neutral-800 hover:text-primary-600 font-semibold transition-all duration-300 hover:translate-x-2 text-lg"
                onClick={toggleMenu}
              >
                My Account
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <div className="fixed top-0 right-0 h-full z-[60]">
        <CartSidebar />
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Search</h2>
              <button
                onClick={toggleSearch}
                className="text-neutral-400 hover:text-neutral-600"
              >
                <X size={24} />
              </button>
            </div>
            <div className="max-w-2xl mx-auto">
              <SearchBar onClose={toggleSearch} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;