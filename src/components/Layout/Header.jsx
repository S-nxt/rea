// // import React, { useState, useEffect } from 'react';
// // import { BiLogIn, BiSearchAlt } from "react-icons/bi";
// // import { BsPersonPlus, BsCart } from "react-icons/bs";
// // import { Link } from "react-router-dom";

// // const Header = () => {
// //   const [isDark, setIsDark] = useState(false);
// //   const [prevScrollPos, setPrevScrollPos] = useState(0);
// //   const [visible, setVisible] = useState(true);

// //   // Dark Mode Setup
// //   useEffect(() => {
// //     const saved = localStorage.getItem('theme');
// //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// //     const initial = saved === 'dark' || (!saved && prefersDark);
// //     setIsDark(initial);
// //     if (initial) document.documentElement.classList.add('dark');
// //   }, []);

// //   const toggleTheme = () => {
// //     setIsDark(prev => {
// //       const newDark = !prev;
// //       if (newDark) {
// //         document.documentElement.classList.add('dark');
// //         localStorage.setItem('theme', 'dark');
// //       } else {
// //         document.documentElement.classList.remove('dark');
// //         localStorage.setItem('theme', 'light');
// //       }
// //       return newDark;
// //     });
// //   };

// //   // SCROLL HIDING EFFECT
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollPos = window.pageYOffset;
// //       const isScrollingDown = currentScrollPos > prevScrollPos;

// //       setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
// //       setPrevScrollPos(currentScrollPos);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, [prevScrollPos]);

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
// //         visible ? 'translate-y-0' : '-translate-y-full'
// //       } bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg`}
// //     >
// //       {/* Top Bar */}
// //       <nav className="max-w-7xl mx-auto px-4 py-4">
// //         <div className="flex flex-col md:flex-row items-center justify-between gap-4">

// //           {/* Logo */}
// //           <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
// //             <Link to="/">Kathford Store</Link>
// //           </h1>

// //           {/* Search Bar */}
// //           {/* CLEAN SEARCH BAR — NO MAGNIFIER BUTTON */}
// //         <div className="flex-1 max-w-xl mx-8">
// //           <div className="relative">
// //             <input
// //               type="search"
// //               placeholder="Search products..."
// //               className="w-full px-6 py-3 pl-12 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 placeholder-gray-500 outline-none focus:ring-4 focus:ring-purple-500/30 transition shadow-inner"
// //             />
// //           </div>
// //         </div>

// //           {/* Icons + Dark Mode */}
// //           <div className="flex items-center gap-6 text-2xl text-gray-700 dark:text-gray-300">
// //             <Link to="/login" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
// //               <BiLogIn />
// //             </Link>
// //             <Link to="/register" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
// //               <BsPersonPlus />
// //             </Link>
// //             <Link to="/cart" className="hover:text-purple-600 dark:hover:text-purple-400 transition relative">
// //               <BsCart />
// //             </Link>

// //             {/* CIRCULAR DARK MODE BUTTON */}
// //             <button
// //             onClick={toggleTheme}
// //             className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-3xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all shadow-lg hover:scale-110"
// //             title={isDark ? "Light Mode" : "Dark Mode"}
// //           >
// //             {isDark ? '☀️' : '🌙'}
// //           </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Bottom Menu */}
// //       <nav className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
// //         <ul className="flex justify-center gap-10 py-4 text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
// //           {['Home', 'About', 'Products', 'Services', 'Blogs'].map((item) => (
// //             <li key={item}>
// //               <Link
// //                 to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
// //                 className="relative hover:text-purple-600 dark:hover:text-purple-400 transition after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-purple-600 after:transition-all hover:after:w-full"
// //               >
// //                 {item}
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Header;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BiLogIn } from "react-icons/bi";
// import { BsPersonPlus, BsCart } from "react-icons/bs";

// const Header = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [prevScroll, setPrevScroll] = useState(0);
//   const [visible, setVisible] = useState(true);

//   // Load theme
//   useEffect(() => {
//     const saved = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//     const initial = saved === "dark" || (!saved && prefersDark);
//     setIsDark(initial);

//     if (initial) document.documentElement.classList.add("dark");
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);

//     if (newTheme) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   };

//   // Hide on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const current = window.pageYOffset;
//       setVisible(prevScroll > current || current < 70);
//       setPrevScroll(current);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScroll]);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700 transition-transform duration-300 ${
//         visible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       {/* TOP BAR */}
//       <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-6">
        
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-purple-600 dark:text-purple-400 tracking-tight"
//         >
//           Kathford Store
//         </Link>

//         {/* Search Box */}
//         <div className="flex-1 max-w-lg">
//           <input
//             type="search"
//             placeholder="Search products..."
//             className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition"
//           />
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center gap-5 text-xl text-gray-700 dark:text-gray-300">
//           <Link to="/login" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
//             <BiLogIn />
//           </Link>

//           <Link to="/register" className="hover:text-purple-600 dark:hover:text-purple-400 transition">
//             <BsPersonPlus />
//           </Link>

//           <Link to="/cart" className="hover:text-purple-600 dark:hover:text-purple-400 transition relative">
//             <BsCart />
//           </Link>

//           {/* Theme Toggle */}
//           <button
//             onClick={toggleTheme}
//             className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
//           >
//             {isDark ? "☀️" : "🌙"}
//           </button>
//         </div>
//       </div>

//       {/* NAV MENU */}
//       <nav className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
//         <ul className="flex justify-center gap-10 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
//           {["Home", "About", "Products", "Services", "Blogs"].map((item) => (
//             <li key={item}>
//               <Link
//                 to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className="hover:text-purple-600 dark:hover:text-purple-400 transition"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { BsPersonPlus, BsCart } from "react-icons/bs";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
  `px-4 py-2 rounded-lg transition 
   ${isActive ? "text-black bg-white/20" : "text-black hover:text-[#FFD700]"}`;


  return (
    <nav
      className="
        fixed top-0 left-0 w-full h-20 
        bg-white/30 backdrop-blur-md 
        border-b border-black/20 
        z-50 flex items-center justify-between px-6
      "
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-black">
        Kathford Store
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 items-center">
        <NavLink className={navLinkClass} to="/">Home</NavLink>
        <NavLink className={navLinkClass} to="/about">About</NavLink>
        <NavLink className={navLinkClass} to="/products">Products</NavLink>
        <NavLink className={navLinkClass} to="/services">Services</NavLink>
        <NavLink className={navLinkClass} to="/blogs">Blogs</NavLink>

        {/* RIGHT SIDE ICONS */}
        <Link to="/login" className="text-2xl text-black hover:text-purple-600 transition">
          <BiLogIn />
        </Link>

        <Link to="/register" className="text-2xl text-black hover:text-purple-600 transition">
          <BsPersonPlus />
        </Link>

        <Link to="/cart" className="text-2xl text-black hover:text-purple-600 transition relative">
          <BsCart />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-black hover:text-purple-600 text-3xl"
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div
          className="
            absolute top-20 left-0 w-full 
            bg-white/30 backdrop-blur-lg 
            border-b border-black/20 
            flex flex-col md:hidden py-4
          "
        >
          <NavLink className={navLinkClass} to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink className={navLinkClass} to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink className={navLinkClass} to="/products" onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink className={navLinkClass} to="/services" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink className={navLinkClass} to="/blogs" onClick={() => setOpen(false)}>Blogs</NavLink>

          {/* Icons in mobile */}
          <div className="flex justify-center gap-8 text-3xl py-3 text-black">
            <Link to="/login" onClick={() => setOpen(false)}><BiLogIn /></Link>
            <Link to="/register" onClick={() => setOpen(false)}><BsPersonPlus /></Link>
            <Link to="/cart" onClick={() => setOpen(false)}><BsCart /></Link>
          </div>
        </div>
      )}
    </nav>
  );
}
