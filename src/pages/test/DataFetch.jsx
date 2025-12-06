import React, { useEffect, useState } from 'react';

const DataFetch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <div
          className="border rounded-lg p-4 shadow hover:scale-105 transform transition duration-300"
          key={product.id}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-cover rounded"
          />
          <h1 className="font-bold mt-2 text-lg">{product.title}</h1>
          <h2 className="text-sm text-gray-500">{product.brand}</h2>
          <h3 className="text-green-600 font-semibold text-lg mt-1">
            ${product.price}
          </h3>
          <Link to ={`/products/${product.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
          view details
        </Link>
        </div>
      ))}
    </div>
  );
};

export default DataFetch;
