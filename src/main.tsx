import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SiteDataProvider } from './context/SiteDataContext';
import { CartProvider } from './context/CartContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SiteDataProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </SiteDataProvider>
  </React.StrictMode>,
);
