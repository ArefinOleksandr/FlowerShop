import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Navbar } from './components/Shared/Navbar/Navbar';
import { Home } from './components/Home/Home';

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  }
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
