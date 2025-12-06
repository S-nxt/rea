import React from 'react';
import { Outlet } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default function FooterLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}