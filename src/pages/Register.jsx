import React from "react";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-80px)] bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Create Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="text-gray-300 block mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-700 text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-gray-700 text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded bg-gray-700 text-white"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
