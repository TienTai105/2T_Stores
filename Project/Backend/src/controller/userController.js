const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Tạo người dùng mới
exports.createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role: role || 'user' });
        await user.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};
// Lấy danh sách tất cả người dùng (Admin)
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};

// Cập nhật thông tin người dùng
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }
        const user = await User.findByIdAndUpdate(id, updates, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err.message });
    }
};

// Xóa người dùng
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        if (id === req.user.id) {
            return res.status(400).json({ message: 'You cannot delete your own account' });
        }

        const user = await User.findByIdAndDelete(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
};

