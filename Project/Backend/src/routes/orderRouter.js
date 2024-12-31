const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController'); // Import controller

// Endpoint để lưu đơn hàng khi thanh toán
router.post('/',orderController.createOrder)
// Endpoint để lấy tất cả đơn hàng
router.get('/',orderController.getAllOrders )

module.exports = router;
