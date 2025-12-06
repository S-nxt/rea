import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About Kathford Store
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We bring you the best products with love, quality, and unbeatable prices. 
            Your trust is our biggest achievement.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Primal fear!!
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl">
            <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Lightning never strikes the same place twice.
            </p>
          </div>
        </div>

        {/* Team / Values */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Fast Delivery', 'Best Prices', '24/7 Support'].map((item) => (
              <div key={item} className="bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-3xl text-white">
                <div className="text-6xl mb-4">Oo</div>
                <h3 className="text-2xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-20">
          <Link
            to="/products"
            className="inline-block px-12 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl rounded-full shadow-2xl transition transform hover:scale-105"
          >
            Shop now?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;