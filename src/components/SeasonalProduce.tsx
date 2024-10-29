import React from 'react';
import { Sun, Cloud, Snowflake, Leaf } from 'lucide-react';

const SeasonalProduce = () => {
  const seasons = [
    {
      name: "Summer",
      icon: Sun,
      products: ["Tomatoes", "Corn", "Peaches"],
      colorClass: "bg-yellow-100",
      textColorClass: "text-yellow-500"
    },
    {
      name: "Fall",
      icon: Leaf,
      products: ["Apples", "Pumpkins", "Squash"],
      colorClass: "bg-orange-100",
      textColorClass: "text-orange-500"
    },
    {
      name: "Winter",
      icon: Snowflake,
      products: ["Root Vegetables", "Citrus", "Winter Greens"],
      colorClass: "bg-blue-100",
      textColorClass: "text-blue-500"
    },
    {
      name: "Spring",
      icon: Cloud,
      products: ["Asparagus", "Peas", "Strawberries"],
      colorClass: "bg-green-100",
      textColorClass: "text-green-500"
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What's in Season</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {seasons.map((season, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 rounded-full ${season.colorClass} flex items-center justify-center mb-4`}>
                <season.icon className={`w-6 h-6 ${season.textColorClass}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{season.name}</h3>
              <ul className="space-y-2">
                {season.products.map((product, idx) => (
                  <li key={idx} className="text-gray-600">{product}</li>
                ))}
              </ul>
              <button className="mt-4 text-green-600 text-sm font-medium hover:text-green-700">
                View all {season.name} produce →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalProduce;