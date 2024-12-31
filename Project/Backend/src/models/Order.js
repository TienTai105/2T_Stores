const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: false },
  },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },  // Cần là ObjectId hợp lệ
      size: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      subtotal: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  orderDate: { type: Date, default: Date.now },
},
{ collection: 'orders' });

module.exports = mongoose.model('Order', OrderSchema);
