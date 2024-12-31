import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../../Pages/Cart/CartContext";
import axios from 'axios';
import './Checkout.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart(); // Sử dụng từ CartContext
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('Cart Data:', cart);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debug

    try {
      
      const totalAmount = cart.reduce((acc, item) => {
        // Loại bỏ các ký tự không phải số từ price (ví dụ: "2.500.000đ")
        const price = typeof item.product.price === 'string'
                ? parseFloat(item.product.price.replace(/[^\d.-]/g, '')) / 1000  // Nếu là chuỗi, loại bỏ ký tự không phải số
                : item.product.price;  // Nếu là số thì không thay đổi
                
            return acc + item.quantity * price;

      }, 0);

      const orderItems = cart.map(item => {
        // Loại bỏ các ký tự không phải số từ price
        const price = typeof item.product.price === 'string'
                ? parseFloat(item.product.price.replace(/[^\d.-]/g, '')) / 1000  // Nếu là chuỗi, loại bỏ ký tự không phải số
                : item.product.price;  // Nếu là số thì không thay đổi
        const subtotal = price * item.quantity;  // Tính subtotal cho mỗi item
        return {
          product: item.product._id,  // Lấy ObjectId từ sản phẩm
          size: item.size,
          quantity: item.quantity,
          price: price,
          subtotal: subtotal,  // Tính subtotal cho mỗi item
        };
      });

      const orderData = { // Định nghĩa chính xác orderData
        customer: form,
        items: orderItems, // items thay vì products
        totalAmount,
        paymentMethod,
      };
  
      console.log('Order Data:', orderData); // Debug dữ liệu trước khi gọi API
      const response = await axios.post('http://localhost:5001/api/orders', orderData);
      console.log('API Response:', response);  // Kiểm tra phản hồi từ API
      if (response.status === 201) {
        // Xóa giỏ hàng
        clearCart(); // Xóa giỏ hàng thông qua CartContext
       // Debug: Kiểm tra sau khi xóa giỏ hàng

        // Kiểm tra lại nếu giỏ hàng đã bị xóa
        const cartAfterRemoval = localStorage.getItem('cart');
        console.log('Cart after removal:', cartAfterRemoval); // Kiểm tra xem giỏ hàng có bị xóa không

        // Điều hướng đến trang thành công
        navigate('/order-success');
    } else {
        console.error('Failed to create order, status:', response.status);
    }
} catch (error) {
    console.error('Failed to create order:', error);
}
  };


  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h1 className="checkout-title">Checkout</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="payment-method">Payment Method</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Cash">Cash on Delivery</option>
            <option value="Credit Card">Credit Card</option>
          </select>
        </div>
        <button className="submit-btn" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
