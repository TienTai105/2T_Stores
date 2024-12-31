const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        category: { type: String, required: true },
        sub_category: { type: String },
        is_new: { type: Boolean, default:false },
        is_bestseller: { type: Boolean, default: false },
        price: { type: Number, required: true },
        images: { type: [String], required: false }, // Danh sách ảnh phụ
        sizes: { type: [Number], required: false },  // Danh sách size
        description: { type: String },
    },
    { collection: 'products' }
);

module.exports = mongoose.model('Product', productSchema);