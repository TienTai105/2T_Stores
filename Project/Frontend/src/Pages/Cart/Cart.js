import React, { useState, useEffect } from "react";
import './Cart.css';
import { useCart } from '../Cart/CartContext';  // Import useCart từ CartContext
import { useNavigate } from 'react-router-dom';  // Import useNavigate từ React Router v6

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();  // Lấy cart và các hàm từ CartContext
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();  // Khởi tạo hàm điều hướng

  // Hàm định dạng giá trị tiền
  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };

  // Chuyển đổi giá từ chuỗi (có dấu phân cách và "đ") sang số
  const parsePrice = (price) => {
    return parseFloat(price.toString().replace(/\./g, '').replace('đ', ''));
  };

  // Tính toán tổng giá trị giỏ hàng
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const price = parsePrice(item.product.price); // Chuyển đổi giá trị
      return acc + price * item.quantity;
    }, 0);
    setCartTotal(total); // Cập nhật tổng giá trị
  }, [cart]);

  // Xử lý thay đổi số lượng sản phẩm
  const handleQuantityChange = (productId, size, quantity) => {
    if (quantity > 0) {
      updateQuantity(productId, quantity, size);  // Gọi hàm updateQuantity để cập nhật số lượng
    }
  };

  const handleProceedToCheckout = () => {
    // Kiểm tra giỏ hàng có sản phẩm hay không
    if (cart.length === 0) {
      alert("Giỏ hàng của bạn không có sản phẩm!");
    } else {
      // Chuyển hướng đến trang thanh toán
      navigate("/checkout");
    }
  };

  return (
    <>
      <h1 className="heading">Shopping <span>Cart</span></h1>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Size</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => {
                const price = parsePrice(item.product.price); // Chuyển giá sang số
                const subtotal = price * item.quantity; // Tính subtotal
                return (
                  <tr key={index}>
                    <td><a href="#" onClick={() => removeFromCart(item.product._id, item.size)}><i className="far fa-times-circle"></i></a></td>
                    <td><img src={`/Images/${item.product.image}`} alt={item.product.name} /></td>
                    <td>{item.product.name}</td>
                    <td>{item.size}</td>
                    <td>{formatPrice(price)}</td>
                    <td>
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => handleQuantityChange(item.product._id, item.size, Number(e.target.value))}
                      />
                    </td>
                    <td>{formatPrice(subtotal)}</td> {/* Hiển thị Subtotal đã tính */}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7">Giỏ hàng trống</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tbody>
            <tr>
              <td>Cart Subtotal</td>
              <td>{formatPrice(cartTotal)}</td> {/* Hiển thị tổng giỏ hàng */}
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>{formatPrice(cartTotal)}</strong></td> {/* Hiển thị tổng giỏ hàng */}
            </tr>
            </tbody>
          </table>
          <button className="normal" onClick={handleProceedToCheckout}>Proceed to checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
