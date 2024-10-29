import React from 'react';
import { Sprout, ShoppingBasket, Sun, Leaf, Users, MapPin, Calendar, ArrowDownWideNarrow } from 'lucide-react';
import FeaturedFarms from './components/FeaturedFarms';
import SeasonalProduce from './components/SeasonalProduce';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <Hero />
      
      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Sprout, text: "Fresh Produce" },
            { icon: Leaf, text: "Organic" },
            { icon: Users, text: "Local Farmers" },
            { icon: Calendar, text: "Seasonal" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-green-100">
              <item.icon className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-medium text-gray-900">{item.text}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Farms Section */}
      <FeaturedFarms />

      {/* Seasonal Produce */}
      <SeasonalProduce />

      {/* Community Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Join Our Growing Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">For Farmers</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  List your produce
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Connect with local customers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Manage orders efficiently
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">For Customers</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Fresh from the farm
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Support local agriculture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Track your food's journey
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Community Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Sustainable practices
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Reduced food miles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Stronger local economy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;