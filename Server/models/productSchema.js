const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: false,
        required: [true, 'Nazwa produktu jest wymagana!']
    },
    calories: {
        type: Number,
        trim: true,
        required: [true, 'Określenie kalorii jest wymagane!']
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;