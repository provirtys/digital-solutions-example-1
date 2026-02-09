import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Hexagon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Hexagon className="h-8 w-8 text-accent" />
            <span className="font-bold text-xl tracking-wider">METAL<span className="text-accent">PRO</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'text-accent' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact Phone (Desktop) */}
          <div className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">+7 (999) 000-00-00</span>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-accent bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="block px-3 py-4 text-accent font-bold border-t border-gray-800 mt-4">
              +7 (999) 000-00-00
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;