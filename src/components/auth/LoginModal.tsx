import React, { useState } from 'react';

const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<'login' | 'signup' | 'forgot'>('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm pt-[5vh] sm:pt-[10vh] md:pt-[15vh] overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-[95%] sm:w-[90%] md:w-[85%] lg:w-[450px] mx-auto p-4 sm:p-6 md:p-8 relative animate-fadeIn my-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl sm:text-2xl transition-colors"
          aria-label="Close"
        >
          ×
        </button>
        <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center space-x-4 sm:space-x-6">
          <button
            className={`font-semibold text-base sm:text-lg pb-2 border-b-2 transition-all duration-200 ${
              view === 'login' 
                ? 'border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400' 
                : 'border-transparent text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400'
            }`}
            onClick={() => setView('login')}
          >
            Sign In
          </button>
        </div>
        {view === 'login' && (
          <>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800 dark:text-white">Welcome Back</h2>
            <form className="space-y-4 sm:space-y-5">
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 dark:bg-gray-700 dark:text-white transition-colors"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 dark:bg-gray-700 dark:text-white transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-colors duration-200 transform hover:scale-[1.02]"
              >
                Sign In
              </button>
            </form>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm">
              <button
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                onClick={() => setView('forgot')}
                type="button"
              >
                Forgot password?
              </button>
              <button
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                onClick={() => setView('signup')}
                type="button"
              >
                Create new account
              </button>
            </div>
          </>
        )}
        {view === 'signup' && (
          <>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800 dark:text-white">Create Account</h2>
            <form className="space-y-4 sm:space-y-5">
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 dark:bg-gray-700 dark:text-white transition-colors"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 dark:bg-gray-700 dark:text-white transition-colors"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 dark:bg-gray-700 dark:text-white transition-colors"
                />
              </div>
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 dark:bg-gray-700 dark:text-white transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-colors duration-200 transform hover:scale-[1.02]"
              >
                Create Account
              </button>
            </form>
            <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm">
              <button
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                onClick={() => setView('login')}
                type="button"
              >
                Already have an account? Sign in
              </button>
            </div>
          </>
        )}
        {view === 'forgot' && (
          <>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-800 dark:text-white">Reset Password</h2>
            <form className="space-y-4 sm:space-y-5">
              <div className="space-y-1 sm:space-y-2">
                <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  id="reset-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 dark:bg-gray-700 dark:text-white transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-colors duration-200 transform hover:scale-[1.02]"
              >
                Send Reset Link
              </button>
            </form>
            <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm">
              <button
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                onClick={() => setView('login')}
                type="button"
              >
                Back to login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal; 