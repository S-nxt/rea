import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "How to Get Better at React",
      description: "A beginner-friendly guide to becoming a React ninja.",
      date: "2025-01-05",
    },
    {
      id: 2,
      title: "Why Tailwind CSS Is Awesome",
      description: "Tailwind makes styling fast, flexible and fun.",
      date: "2025-01-10",
    },
    {
      id: 3,
      title: "JavaScript Tips You Should Know",
      description: "Some useful tricks to improve your JS code instantly.",
      date: "2025-01-15",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Latest <span className="text-blue-600 dark:text-blue-400">Blogs</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {blog.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 border-t pt-2">
              {blog.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
