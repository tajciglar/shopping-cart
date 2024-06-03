import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import ItemPage from './components/ItemPage.jsx';
import HomePage from './components/HomePage.jsx';
import CategoryPage from './components/CategoryPage.jsx'; // New component to handle category-specific items
import Cart from './components/Cart.jsx';
import { CartProvider } from './components/CartContex.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "items",
        element: <ItemPage />,
      },
      {
        path: "items/:category",
        element: <CategoryPage />, // New route for category items
      },
      {
        path: "cart",
        element: <Cart />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
);
