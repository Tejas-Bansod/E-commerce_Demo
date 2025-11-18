import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CartSidebar: React.FC = () => {
  const { items, isCartOpen, toggleCart, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleCart}
          />
          
          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 overflow-y-auto cart-container"
          >
            <div className="p-5 bg-white sticky top-0 z-10 border-b border-neutral-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-serif font-semibold flex items-center">
                  <ShoppingBag className="mr-2" size={20} />
                  Your Cart
                  <span className="ml-2 text-sm font-normal text-neutral-500">
                    ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                  </span>
                </h2>
                <button 
                  onClick={toggleCart}
                  className="text-neutral-500 hover:text-neutral-800"
                  aria-label="Close cart"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-5">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag size={48} className="mx-auto text-neutral-300 mb-4" />
                  <h3 className="text-lg font-medium text-neutral-800 mb-2">Your cart is empty</h3>
                  <p className="text-neutral-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
                  <button 
                    onClick={toggleCart}
                    className="btn btn-primary"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="divide-y divide-neutral-200">
                    {items.map((item) => (
                      <div key={item.product.id} className="py-4 flex">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-neutral-800">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3>
                                    <Link to={`/products/${item.product.id}`} onClick={toggleCart}>
                                      {item.product.name}
                                    </Link>
                                  </h3>
                                  {item.selectedSize && (
                                    <p className="mt-1 text-sm text-neutral-500">
                                      Size: {item.selectedSize}
                                    </p>
                                  )}
                                </div>
                                <p className="ml-4">₹{(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            </div>
                            <p className="mt-1 text-sm text-neutral-500">
                              {item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1)}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between text-sm mt-2">
                            <div className="flex items-center border border-neutral-300 rounded">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="px-2 py-1 text-neutral-600 hover:text-primary-600"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="px-3 py-1 border-x border-neutral-300">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="px-2 py-1 text-neutral-600 hover:text-primary-600"
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.product.id)}
                              className="flex items-center px-2 py-1 rounded-md text-red-600 hover:bg-red-100 hover:text-red-800 transition-colors"
                              aria-label="Remove item from cart"
                            >
                              <Trash2 size={14} className="mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-neutral-200 pt-6 mt-6">
                    <div className="flex justify-between text-base font-medium text-neutral-800 mb-1">
                      <p>Subtotal</p>
                      <p>₹{totalPrice.toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-neutral-500 mb-6">Shipping and taxes calculated at checkout</p>
                    
                    <button className="w-full btn btn-primary mb-3">
                      Checkout
                    </button>
                    
                    <div className="flex justify-center text-center text-sm text-neutral-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          className="font-medium text-primary-600 hover:text-primary-800"
                          onClick={toggleCart}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;