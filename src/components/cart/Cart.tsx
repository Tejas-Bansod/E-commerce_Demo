import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  discount?: number;
}

interface CartProps {
  items: Product[];
  onRemoveItem: (productId: number) => void;
}

const Cart = ({ items, onRemoveItem }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
          <span className="text-gray-600">({items.length} items)</span>
        </div>

        <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-xl font-bold">₹{total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; 