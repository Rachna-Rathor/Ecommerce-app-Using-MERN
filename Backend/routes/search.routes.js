// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const searchController = require('../controller/search.controller');

// Route to handle search
router.get('/search', searchController.searchProducts);

module.exports = router;
