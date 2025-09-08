import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-sm">
            <span className="text-blue-600 font-bold text-lg">🏠</span>
          </div>
          <span className="text-white text-xl font-semibold tracking-wide"> StayBase  </span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#Home" 
            className="text-white hover:text-blue-200 transition-all duration-200 font-medium text-sm tracking-wide hover:scale-105 px-3 py-2 rounded-md hover:bg-white/10"
          >
            Home
          </a>
          <a 
            href="#Hotels" 
            className="text-white hover:text-blue-200 transition-all duration-200 font-medium text-sm tracking-wide hover:scale-105 px-3 py-2 rounded-md hover:bg-white/10"
          >
            Hotels
          </a>
          <a 
            href="#About" 
            className="text-white hover:text-blue-200 transition-all duration-200 font-medium text-sm tracking-wide hover:scale-105 px-3 py-2 rounded-md hover:bg-white/10"
          >
           About
          </a>
          <a 
            href="#Blog" 
            className="text-white hover:text-blue-200 transition-all duration-200 font-medium text-sm tracking-wide hover:scale-105 px-3 py-2 rounded-md hover:bg-white/10"
          >
           Blog 
          </a>
          <a 
            href="#dashboard" 
            className="text-white hover:text-blue-200 transition-all duration-200 font-medium text-sm tracking-wide hover:scale-105 px-3 py-2 rounded-md hover:bg-white/10"
          >
            Dashboard
          </a>
        </div>

        {/* Right side - Search and Login */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="text-white hover:text-blue-200 transition-all duration-200 p-2 rounded-full hover:bg-white/10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Login Button */}
          <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-200 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105">
            Login
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-blue-200 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-80 opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible overflow-hidden'
      }`}>
        <div className="mt-4 pb-4 border-t border-blue-400/30">
          <div className="flex flex-col space-y-1 mt-4">
            <a 
              href="#home" 
              className="text-white hover:text-blue-200 hover:bg-white/10 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#hotels" 
              className="text-white hover:text-blue-200 hover:bg-white/10 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hotels
            </a>
            <a 
              href="#About" 
              className="text-white hover:text-blue-200 hover:bg-white/10 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About 
            </a>
            <a 
              href="#Blog" 
              className="text-white hover:text-blue-200 hover:bg-white/10 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a 
              href="#dashboard" 
              className="text-white hover:text-blue-200 hover:bg-white/10 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;