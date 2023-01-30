const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: true,
        maxlength: 40
    },
    login: {
        type: String,
        required: true,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        maxlength: 20
    },
    age: {
        type: Number
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    image: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;