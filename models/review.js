const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({

    placeid: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const reviewModel = mongoose.model('review', reviewSchema)

module.exports = reviewModel