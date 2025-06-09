import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+380 93 419 20 11</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <Mail className="h-4 w-4" />
                <span>sofi.korenovska@gmail.com</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 hover:text-blue-200 transition-colors">
                <MapPin className="h-4 w-4" />
                <span>м. Вінниця, вул. Немченка Олександра 17А</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="animate-pulse">🟢 Онлайн зараз</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 group">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Sofia IT
              </span>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group">
                Головна
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#services" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group">
                Послуги
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group">
                Про мене
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group">
                Контакти
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg">
          <a href="#home" className="text-gray-900 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">
            Головна
          </a>
          <a href="#services" className="text-gray-900 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">
            Послуги
          </a>
          <a href="#about" className="text-gray-900 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">
            Про мене
          </a>
          <a href="#contact" className="text-gray-900 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors">
            Контакти
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;