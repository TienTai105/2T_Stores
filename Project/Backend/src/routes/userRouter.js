const express = require('express');
const {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
} = require('../controller/userController');
const { authenticate, authorizeAdmin } = require('../../authMiddleware');

const router = express.Router();

// Route: Tạo người dùng
router.post('/', authenticate, authorizeAdmin, createUser);

// Route: Lấy danh sách người dùng (chỉ Admin)
router.get('/', authenticate, authorizeAdmin, getUsers);

// Route: Cập nhật người dùng
router.put('/:id', authenticate, authorizeAdmin, updateUser);

// Route: Xóa người dùng
router.delete('/:id', authenticate, authorizeAdmin, deleteUser);



module.exports = router;
