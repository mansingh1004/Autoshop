
import React, { useState } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/Services' },
    { name: 'Insurance Claim', path: '/insurance' },
    { name: 'Prices', path: '/prices' },
    { name: 'About Us', path: '/AboutUs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Car className="text-red-600 w-8 h-8" />
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              Auto<span className="text-red-600">Service</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-bold transition-all uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* Simple Call Now Button */}
            <a 
              href="tel:+919876543210" // Replace with your actual phone number
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-black uppercase italic tracking-wider transition-all transform active:scale-95 shadow-lg shadow-red-900/20"
            >
              <Phone size={18} fill="currentColor" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-500 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top duration-300`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-red-500 block px-3 py-4 rounded-md text-base font-bold uppercase border-b border-slate-800/50"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Call Now Button */}
          <div className="pt-4">
            <a 
              href="tel: +91 9871788198" 
              className="w-full flex items-center justify-center gap-3 bg-red-600 text-white px-3 py-4 rounded-xl font-black uppercase italic tracking-widest shadow-lg"
            >
              <Phone size={22} fill="currentColor" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;