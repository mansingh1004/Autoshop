import React, { useState } from 'react';
import { Menu, X, Car } from 'lucide-react'; // Optional: install lucide-react for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Inventory', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Car className="text-red-600 w-8 h-8" />
            <span className="text-2xl font-black tracking-tighter uppercase italic">
              Auto<span className="text-red-600">Shop</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-full font-bold transition-transform active:scale-95">
                Call Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-red-500 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800 border-t border-slate-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:bg-slate-700 block px-3 py-4 rounded-md text-base font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full text-left bg-red-600 px-3 py-4 rounded-md font-bold">
            Call Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;