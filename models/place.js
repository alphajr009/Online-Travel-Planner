const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    opentime: {
        type: Number,
        required: true
    },
    endtime: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const placeModel = mongoose.model('place', placeSchema)

module.exports = placeModel