import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Counter from './pages/test/Counter';
import Room from './pages/test/Room';
import DataFetch from './pages/test/DataFetch';

import ReduxCounter from './redux/ReduxCounter';
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Products from './pages/Products';
import Product from './pages/test/Product';
import Login from './Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="register" element={<Register />} />
        <Route path='counter' element={<Counter />} />
        <Route path='cart' element={<Cart />} />
        <Route path='room' element={<Room />} />
        <Route path='data' element={<DataFetch />} />
        <Route path="login" element={<Login />} />

        
        <Route path='product/:id' element={<Product />} />
        <Route path='rcounter' element={<ReduxCounter />} />
        
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<Product />} />

        <Route path='*' element={<NotFound />} />

      </Route>
    </Routes>
  );
};

export default MyRoutes;
