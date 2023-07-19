const {Bad_Request_Error,Not_Found_Error} = require('../Errors');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');
// upload product image in local 
const productUploadLocal = async (req, res) => {
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
// upload product image in cloudinary
 const productUploadOnCloudinary = async (req, res) => {
    const result = await cloudinary.uploader.upload(
        req.files.image.tempFilePath,
        {
          use_filename: true,
          folder: 'Upload_Files_Project',
        }
      );
    fs.unlinkSync(req.files.image.tempFilePath);
    res.status(200).json({
        image:{
            src:result.secure_url 
        } // you can add more data here
    });
 }

module.exports = {
    productUploadOnCloudinary
}