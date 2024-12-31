import React, { useState, useEffect } from "react";
import './style.css';  // Đảm bảo rằng bạn đã import file CSS cần thiết
import { useParams } from "react-router-dom";
import axios from 'axios';
import CatSlider from "../../Components/catslider";
import { useCart } from '../Cart/CartContext';  // Import useCart

const DetailsPage = () => {
  const { addToCart } = useCart();  // Sử dụng hook để lấy hàm addToCart
  const { productId } = useParams();  // Lấy productId từ URL
  const [product, setProduct] = useState(null);  // Lưu trữ sản phẩm chi tiết
  const [loading, setLoading] = useState(true);  // Trạng thái loading
  const [mainImage, setMainImage] = useState("");  // Lưu trữ ảnh chính
  const [quantity, setQuantity] = useState(1);  // Số lượng sản phẩm mặc định là 1
  const [selectedSize, setSelectedSize] = useState("");  // Lưu trữ kích thước đã chọn
  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + 'đ';
  };
  useEffect(() => {
    // Gọi API để lấy chi tiết sản phẩm dựa trên productId
    axios.get(`http://localhost:5001/api/products/${productId}`)
      .then(response => {
        if (response.data) {
          console.log(response.data);  // Kiểm tra dữ liệu sản phẩm
          setProduct(response.data);  // Lưu thông tin sản phẩm vào state
          setMainImage(response.data.image || "default.jpg");  // Đặt ảnh chính là ảnh đầu tiên, nếu có
        } else {
          setProduct(null);  // Nếu không có sản phẩm, đặt product thành null
        }
        setLoading(false);  // Đặt loading thành false khi có dữ liệu
      })
      .catch(error => {
        console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
        setLoading(false);  // Đặt loading thành false nếu có lỗi
        setProduct(null);  // Nếu có lỗi, đặt product thành null
      });
  }, [productId]);  // Chạy lại khi productId thay đổi

  // Nếu đang tải dữ liệu
  if (loading) {
    return <div>Đang tải thông tin sản phẩm...</div>;
  }

  // Nếu không tìm thấy sản phẩm
  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Vui lòng chọn kích thước trước khi thêm vào giỏ hàng."); // Thông báo nếu chưa chọn size
      return;
    }
    addToCart(product, quantity, selectedSize);  // Gọi addToCart để thêm sản phẩm vào giỏ
  };


  return (
    <>
    <section id="prodetails" className="section-1">
      <div className="single-pro-image">
        {/* Hiển thị ảnh chính của sản phẩm */}
        <img src={`/Images/${mainImage}`} width="100%" id="MainImg" alt={product.name} />
        <div className="small-img-group">
          {/* Hiển thị các ảnh phụ */}
          {product.images && product.images.map((image, index) => (
            <div key={index} className="small-img-col">
              <img 
                src={`/Images/${image}`} 
                width="100%" 
                className="small-img" 
                alt={`small-image-${index}`}
                onClick={() => setMainImage(image)}  // Khi nhấn vào ảnh nhỏ, thay đổi ảnh chính
              />
            </div>
          ))}
        </div>
      </div>

      <div className="single-pro-details">
        <h6>Home / Sneaker</h6>
        <h4>{product.name}</h4>
        <h2>{formatPrice(product.price)}</h2>
        
        {/* Chọn size của sản phẩm */}
        <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
          <option value="">Select Size</option>
          {product.sizes && product.sizes.map((size, index) => (
            <option key={index} value={size}>{size}</option>
          ))}
        </select>

        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          min="1" 
        />
        <button className="btn" onClick={handleAddToCart}>Add To Cart</button>
        {/* Mô tả sản phẩm */}
        <h4>Product Details</h4>
        <span>{product.description}</span>
      </div>
    </section>
    <CatSlider/>
    </>
  );
};

export default DetailsPage;
