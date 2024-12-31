const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('../Backend/src/routes/productRouter')
const orderRoutes = require('../Backend/src/routes/orderRouter')
const app = express();
const uri = 'mongodb+srv://tientai1005:tientai2004@doantuandat.bxj6r.mongodb.net/2T_store?retryWrites=true&w=majority&appName=doantuandat'
// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
// Kết nối MongoDB
mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


// Listen
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
