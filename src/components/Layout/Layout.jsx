// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from './Header'; 
// import Footer from './Footer';

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <Outlet />
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Layout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />

      {/* FIX: Add padding so content is not hidden behind fixed navbar */}
      <main className="pt-[0px] min-h-screen bg-gray-900 text-white">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
