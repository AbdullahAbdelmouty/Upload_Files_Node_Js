// const Prodcut = require('../models/product');
const createProduct = async (req, res) => {
    console.log("d");
    res.status(200).json({ success: true, msg: 'create product' });
}

module.exports = {
    createProduct
};