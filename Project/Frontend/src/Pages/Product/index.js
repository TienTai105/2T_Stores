import React, { useState, useEffect } from "react";
import './index.css';
import { Link } from "react-router-dom";
import { useCart } from '../Cart/CartContext';  // Import useCart
import axios from 'axios';  // Import axios để gọi API

const Product = ({ apiUrl, title}) => {
  const [products, setProducts] = useState([]);  // Lưu trữ danh sách sản phẩm
  const [loading, setLoading] = useState(true);  // Trạng thái loading

  // Gọi API để lấy danh sách sản phẩm
  useEffect(() => {
    console.log(apiUrl); // Để kiểm tra URL API
    axios.get(apiUrl)
      // Thay URL này bằng URL của backend của bạn
      .then(response => {
        setProducts(response.data);  // Lưu dữ liệu vào state
        setLoading(false);  // Đặt loading thành false khi dữ liệu đã được lấy
      })
      .catch(error => {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
        setLoading(false);  // Đặt loading thành false nếu có lỗi
      });
  }, [apiUrl]); // Chạy 1 lần khi component được mount

  if (loading) {
    return <div>Đang tải sản phẩm...</div>;
  }

  return (
    <section className="products" id="products">
      <h1 className="heading"><span>{title}</span></h1>
      <div className="box-container">
        {products.map(product => (
          <div className="box" key={product._id}>
            <div className="image">
              <Link to={`/product/${product._id}`}>
                <img src={`/Images/${product.image}`} alt={product.name} />
              </Link>
              <div className="icon">
                <a href="#" className="fas fa-heart"></a>
                <a href= {`/product/${product._id}`} className="cart-btn">Add To Cart</a>
                <a href="#" className="fas fa-share"></a>
              </div>
            </div>
            <div className="content">
              <h3>{product.name}</h3>
              <div className="price">{Number(product.price).toLocaleString('vi-VN')}đ</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
