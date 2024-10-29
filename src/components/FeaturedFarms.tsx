import React from 'react';
import { Star, MapPin } from 'lucide-react';

const FeaturedFarms = () => {
  const farms = [
    {
      name: "Green Valley Organics",
      image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      location: "Vermont",
      rating: 4.8,
      specialty: "Organic Vegetables"
    },
    {
      name: "Sunrise Dairy Farm",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      location: "Wisconsin",
      rating: 4.9,
      specialty: "Dairy Products"
    },
    {
      name: "Heritage Apple Orchards",
      image: "https://images.unsplash.com/photo-1444392061186-9fc38f84f726?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      location: "Washington",
      rating: 4.7,
      specialty: "Heirloom Apples"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Farms</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {farms.map((farm, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img src={farm.image} alt={farm.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{farm.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{farm.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {farm.location}
                </div>
                <p className="text-green-600 text-sm font-medium">{farm.specialty}</p>
                <button className="mt-4 w-full bg-green-50 text-green-600 py-2 rounded-md hover:bg-green-100 transition-colors">
                  Visit Farm
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFarms;