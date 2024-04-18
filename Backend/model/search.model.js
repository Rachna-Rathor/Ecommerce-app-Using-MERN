const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true }, // Changed to String to accommodate currency symbol
    category: { type: String, required: true },
    company: { type: String, required: true },
    gender: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
