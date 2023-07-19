const {Bad_Request_Error,Not_Found_Error} = require('../Errors');
const path = require('path');
const productUpload = async (req, res) => {
    console.log(req.files.image);
    console.log(req.files.image.mimetype);
    if (!req.files) {
     throw new Not_Found_Error('No file uploaded');
    }
    const product = req.files.image;
    if (!product.mimetype.startsWith('image')) {
        throw new Bad_Request_Error('Please upload an image file');
    }
    if (product.size > process.env.MAX_FILE_UPLOAD) {
        throw new Bad_Request_Error('Please upload an image less than 1MB');
    }
    // mv() method places the file inside public directory
    const imagePath = path.join(__dirname, '../public/uploads/'+`${product.name}`);
    await product.mv(imagePath);
    res.status(200).json({
        image:{
            src:`/uploads/${product.name}`
        }
    });
}

module.exports = {
    productUpload
}