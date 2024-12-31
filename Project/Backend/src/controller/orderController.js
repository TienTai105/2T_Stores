const Order = require('../models/Order');
const Product = require('../models/Product');


// Lưu đơn hàng khi thanh toán
exports.createOrder = async (req, res) => {
    try {
      console.log('API createOrder called with:', req.body);
  
      const { items, totalAmount, customer, paymentMethod } = req.body;
  
      if (!items || !totalAmount || !customer || !paymentMethod) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      // Kiểm tra items có dữ liệu hợp lệ
      if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: 'Items should be a non-empty array' });
      }
  
      // Tạo đối tượng đơn hàng mới
      const newOrder = new Order({
        customer,
        items, // Lưu items thay vì products
        totalAmount,
        paymentMethod,
        orderDate: new Date(),
      });
  
      const savedOrder = await newOrder.save();
  
      res.status(201).json({
        message: 'Order created successfully',
        order: savedOrder,
      });
    } catch (error) {
      console.error('Error while creating order:', error);
      res.status(500).json({ message: 'Failed to save order', error: error.message });
    }
  };
  

// Lấy danh sách đơn hàng (tuỳ chọn nếu cần)
exports.getAllOrders = async (req, res) => {
    try {
        // Lấy tất cả đơn hàng
        const orders = await Order.find();

        // Trả về danh sách đơn hàng
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error while fetching orders:', error);
        res.status(500).json({
            message: 'Lỗi khi lấy danh sách đơn hàng',
            error: error.message,
        });
    }
};
