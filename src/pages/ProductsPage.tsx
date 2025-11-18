import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import { getFilteredProducts } from '../data/products';
import { Filter, SlidersHorizontal, ChevronDown, Check } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Filter state
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(
    queryParams.get('category') || undefined
  );
  const [searchTerm, setSearchTerm] = useState<string | undefined>(
    queryParams.get('search') || undefined
  );

  // Update search term when URL changes
  useEffect(() => {
    const searchParam = queryParams.get('search');
    setSearchTerm(searchParam || undefined);
  }, [location.search]);
  const [tagFilters, setTagFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter options
  const categories = [
    { value: 'powder', label: 'Powder' },
    { value: 'tablets', label: 'Tablets' },
    { value: 'capsules', label: 'Capsules' },
    { value: 'blends', label: 'Blends' },
    { value: 'specialty', label: 'Specialty' }
  ];
  
  const tags = [
    { value: 'organic', label: 'Organic' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten-Free' },
    { value: 'premium', label: 'Premium' },
    { value: 'hawaiian', label: 'Hawaiian' }
  ];
  
  // Get filtered products
  const filteredProducts = getFilteredProducts(categoryFilter, searchTerm, tagFilters);
  
  // Toggle a tag filter
  const toggleTagFilter = (tag: string) => {
    setTagFilters(current => 
      current.includes(tag)
        ? current.filter(t => t !== tag)
        : [...current, tag]
    );
  };
  
  // Clear all filters
  const clearFilters = () => {
    setCategoryFilter(undefined);
    setTagFilters([]);
  };
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (categoryFilter) {
      params.set('category', categoryFilter);
    }
    
    if (searchTerm) {
      params.set('search', searchTerm);
    }
    
    const newUrl = `${location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.replaceState({}, '', newUrl);
  }, [categoryFilter, searchTerm, location.pathname]);
  
  // Set page title
  useEffect(() => {
    document.title = 'Spirulina Collection | Seven Hills Wholefoods';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  // Close filter on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsFilterOpen(true);
      } else {
        setIsFilterOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial state
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Products</h1>
          <p className="text-neutral-600 max-w-2xl text-sm md:text-base">
            Explore our premium range of spirulina products, carefully harvested and processed to preserve nutritional integrity.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <div className="md:w-64 flex-shrink-0">
            <div className="flex justify-between items-center mb-2 md:hidden">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center text-neutral-800"
              >
                <Filter size={18} className="mr-2" />
                Filters
                <ChevronDown 
                  size={16} 
                  className={`ml-1 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {(categoryFilter || tagFilters.length > 0) && (
                <button 
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-800"
                >
                  Clear all
                </button>
              )}
            </div>
            
            {isFilterOpen && (
              <div className="bg-white p-3 rounded-lg border border-neutral-200 mb-4 sticky top-4">
                <div className="hidden md:flex justify-between items-center mb-4">
                  <h3 className="font-medium flex items-center">
                    <SlidersHorizontal size={16} className="mr-2" />
                    Filters
                  </h3>
                  
                  {(categoryFilter || tagFilters.length > 0) && (
                    <button 
                      onClick={clearFilters}
                      className="text-xs text-primary-600 hover:text-primary-800"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                
                {/* Category filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-neutral-800">Category</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="category-all"
                        name="category"
                        checked={!categoryFilter}
                        onChange={() => setCategoryFilter(undefined)}
                        className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="category-all" className="text-sm text-neutral-700">
                        All Types
                      </label>
                    </div>
                    
                    {categories.map(category => (
                      <div key={category.value} className="flex items-center">
                        <input
                          type="radio"
                          id={`category-${category.value}`}
                          name="category"
                          checked={categoryFilter === category.value}
                          onChange={() => setCategoryFilter(category.value)}
                          className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor={`category-${category.value}`} className="text-sm text-neutral-700">
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tags filter */}
                <div>
                  <h4 className="font-medium mb-3 text-neutral-800">Product Features</h4>
                  <div className="space-y-2">
                    {tags.map(tag => (
                      <div key={tag.value} className="flex items-center">
                        <button
                          onClick={() => toggleTagFilter(tag.value)}
                          className={`flex items-center w-full text-left px-2 py-1.5 rounded ${
                            tagFilters.includes(tag.value) 
                              ? 'bg-primary-50 text-primary-800' 
                              : 'text-neutral-700 hover:bg-neutral-50'
                          }`}
                        >
                          <div className={`w-4 h-4 mr-2 flex-shrink-0 border rounded ${
                            tagFilters.includes(tag.value)
                              ? 'bg-primary-600 border-primary-600'
                              : 'border-neutral-300'
                          }`}>
                            {tagFilters.includes(tag.value) && (
                              <Check size={16} className="text-white" />
                            )}
                          </div>
                          <span className="text-sm">{tag.label}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Products */}
          <div className="flex-1">
            <div className="w-full">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default ProductsPage;