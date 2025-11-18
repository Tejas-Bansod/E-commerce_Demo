import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: number;
}

interface ProductPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductPage = ({ products, onAddToCart }: ProductPageProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-gray-600 hover:text-gray-900"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="relative w-full max-w-md mx-auto aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain rounded-lg"
          />
          {product.discount && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              -{product.discount}%
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.price.toFixed(2)}
            </span>
            {product.discount && (
              <span className="text-lg text-gray-500 line-through">
                ₹{(product.price * (1 + product.discount / 100)).toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 