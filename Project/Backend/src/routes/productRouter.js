const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();

// Lấy sản phẩm theo ID
router.get('/:id', productController.getProductById);
// Lấy tất cả sản phẩm
router.get('/', productController.getAllProducts);
// Lấy sản phẩm mới
router.get('/new', productController.getNewProducts);

// Lấy sản phẩm bán
router.get('/bestseller', productController.getBestSellers);

// Lấy sản phẩm theo danh mục
router.get('/category/:category', productController.getProductsByCategory);

module.exports = router;
