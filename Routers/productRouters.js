const express = require('express');
const { createProduct } = require('../Controllers/product');
const { productUpload } = require('../Controllers/productUpload');
const router = express.Router();

router.route('/').post(createProduct);
router.route('/upload').post(productUpload);

module.exports = router;