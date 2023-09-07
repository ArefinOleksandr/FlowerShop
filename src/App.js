import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Navbar } from './components/Shared/Navbar/Navbar';
import { Home } from './components/Home/Home';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Category } from './components/Category/Category';
import { Product } from './components/Product/Product';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path: '/category',
    element: <Category />
  },
  {
    path:'/item',
    element: <Product />
  }
],{basename: '/FlowerShop'})

function  App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
