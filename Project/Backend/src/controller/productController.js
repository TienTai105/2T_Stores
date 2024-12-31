const Product = require('../models/Product');
const mongoose = require('mongoose');

// Lấy tất cả sản phẩm
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

// Lấy sản phẩm theo ID
exports.getProductById = async (req, res) => {
    const { id } = req.params; // Lấy ID từ URL
    try {
        // Tìm sản phẩm theo ID
        const product = await Product.findById(id);
        
        // Nếu sản phẩm không tồn tại
        if (!product) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
        }

        // Trả về sản phẩm nếu tìm thấy
        return res.status(200).json(product);

    } catch (error) {
        console.error(`Lỗi khi lấy sản phẩm với ID ${id}:`, error.message);
        // Nếu có lỗi trong quá trình tìm kiếm hoặc kết nối DB
        return res.status(500).json({ message: 'Lỗi khi lấy sản phẩm', error: error.message });
    }
};

exports.getNewProducts = async (req, res) => {
  console.log("Received request for new products");  // Log khi nhận được request

  try {
    // Trước khi tìm sản phẩm
    console.log("Querying products where is_new = true...");

    // Truy vấn tìm sản phẩm có thuộc tính is_new = true
    const products = await Product.find({ is_new: true }).exec();

    // Kiểm tra kết quả trả về
    if (!products || products.length === 0) {
      console.log("No new products found.");
      return res.status(404).json({ message: "Không có sản phẩm mới" });
    }

    // Log số lượng sản phẩm mới tìm được
    console.log(`Found ${products.length} new products.`);
    
    // Trả về danh sách sản phẩm mới
    return res.status(200).json(products);

  } catch (error) {
    console.error("Error fetching new products:", error);  // Log khi có lỗi trong quá trình truy vấn
    return res.status(500).json({ message: "Lỗi khi lấy sản phẩm mới", error: error.message });
  }
};


// Lấy sản phẩm bán chạy
exports.getBestSellers = async (req, res) => {
  try {
    const products = await Product.find({is_bestseller: true}); // Lấy các sản phẩm bán chạy
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy sản phẩm bán chạy", error });
  }
};

// Lấy sản phẩm theo danh mục
exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params; // Lấy danh mục từ URL params
    const products = await Product.find({ category }); // Lấy sản phẩm theo danh mục
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy sản phẩm theo danh mục", error });
  }
};