import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const OrderSuccess = () => (
  <div className="order-success-container">
    <h1 className="order-success-title">Thank You!</h1>
    <p className="order-success-message">Your order has been successfully placed.</p>
    <Link to="/" className="home-link">
      Go to Home
    </Link>
  </div>
);

export default OrderSuccess;
