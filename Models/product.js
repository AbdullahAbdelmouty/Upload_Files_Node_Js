const mongoos = require('mongoose');

const productSchema = new mongoos.Schema({
    name: {
        type: String,
        required: [true, 'Product name must be provided'],
    },
    price: {
        type: Number,
        required: [true, 'Product price must be provided'],
    },
    image:{
        type: String,
        required: [true, 'Product image must be provided'],
    }
});

module.exports = mongoos.model('Product', productSchema);