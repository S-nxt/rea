// src/pages/Product.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-2xl">Loading...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center text-red-500">Product not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-8">
          <ul className="flex gap-2 text-gray-600 dark:text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li className="text-purple-600">{product.title.substring(0, 30)}...</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* Image */}
          <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-12">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full max-h-96 object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="p-10 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {product.title}
            </h1>

            <div className="flex items-center gap-4">
              <span className="text-yellow-500 text-xl">★★★★★</span>
              <span className="text-lg text-gray-600 dark:text-gray-400">
                {product.rating?.rate || 4.5} ({product.rating?.count || 128} reviews)
              </span>
            </div>

            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400">
              ${product.price}
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {product.description}
            </p>

            <div className="flex gap-4 mt-8">
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:scale-105">
                Add to Cart
              </button>
              <button className="px-6 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition">
                ♡ Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;