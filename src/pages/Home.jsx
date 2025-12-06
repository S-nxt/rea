import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800/50 p-4">
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">Welcome to the Home Page!</h1>
      <p className="text-lg text-gray-200 max-w-md text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde cumque, tempore laboriosam, doloribus mollitia consequatur nam magni nobis, iste saepe accusamus quibusdam officiis necessitatibus! Fugiat beatae laudantium voluptates debitis ab!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dignissimos provident repellendus aspernatur ut asperiores, magnam ratione maxime deleniti unde, atque, eos quam accusantium eum omnis fuga fugiat. Inventore, ipsa.
      </p>

      <section className="my-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-700/80 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">Fast Delivery</h3>
            <p className="text-gray-300 mt-2">Delivered to your door quickly.</p>
          </div>
          <div className="p-6 bg-gray-700/80 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">Best Quality</h3>
            <p className="text-gray-300 mt-2">Premium products guaranteed.</p>
          </div>
          <div className="p-6 bg-gray-700/80 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-white">24/7 Support</h3>
            <p className="text-gray-300 mt-2">We are always here to help.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
