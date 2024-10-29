import React from 'react';
import { Menu, ShoppingBasket, User, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Menu className="h-6 w-6 text-gray-600 cursor-pointer md:hidden" />
            <span className="text-2xl font-bold text-green-600">FarmLink</span>
          </div>
          
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for farms or produce..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border border-gray-200 focus:outline-none focus:border-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <User className="h-5 w-5" />
              <span>Account</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ShoppingBasket className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;