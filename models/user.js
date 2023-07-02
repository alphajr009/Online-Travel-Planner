const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String, required: true
    },
    gender: {
        type: String, required: false
    },
    hometown: {
        type: String, required: false
    },
    address: {
        type: String, required: false
    },
    address: {
        type: String, required: false
    },

    password: {
        type: String, required: true
    },

    isAdmin: {
        type: Boolean, default: false
    },



}, {
    timestamps: true,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel