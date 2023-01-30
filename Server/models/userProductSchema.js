const mongoose = require('mongoose');

const userProductSchema = new mongoose.Schema({
    userId: {
        type: String,
    },
    productName: {
        type: String,
    },
    productCalories: {
        type: Number,
    } 
})

const UserProduct = mongoose.model('UserProduct', userProductSchema);
module.exports = UserProduct;