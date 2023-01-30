const express = require('express');
const ProductSchema = require('../models/productSchema.js');

const router = express.Router();

router.get('/all', async (req, res) => {
    const products = await ProductSchema.find();
    return res.send(products);
});

module.exports = router;