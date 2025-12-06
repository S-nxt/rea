import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with:\nEmail: ${form.email}\nPassword: ${form.password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
        
        <h2 className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700
                         border border-gray-300 dark:border-gray-600
                         text-gray-800 dark:text-gray-200
                         focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700
                         border border-gray-300 dark:border-gray-600
                         text-gray-800 dark:text-gray-200
                         focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white
                       py-2 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-600 dark:text-purple-400 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
