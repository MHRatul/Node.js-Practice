const mongoose = require('mongoose');
const { Schema } = mongoose;
const registration = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 8,
        minlength: 4
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', registration)