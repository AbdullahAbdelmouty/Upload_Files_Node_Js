const express = require('express');
const { createProduct,getAllProducts } = require('../Controllers/product');
const { productUploadOnCloudinary } = require('../Controllers/productUpload');
const router = express.Router();

router.route('/').post(createProduct).get(getAllProducts);
router.route('/upload').post(productUploadOnCloudinary);

module.exports = router;