import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import QuantityProvider from './context/QuantityContext';
import reportWebVitals from './reportWebVitals';
import Products from './Products';
import Wishlist from './Wishlist';
import Cart from "./Cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<QuantityProvider>
  <Router >
    <Routes>
  <Route path="/App" element={<App/>}/>
  <Route path="/" element={<App/>}/>
  <Route path="/product/:id" element ={<Products/>} />
  <Route path='/wishlist' element ={<Wishlist/>} />
  <Route path='/cart' element ={<Cart/>} />
  </Routes>
  </Router>
    </QuantityProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
