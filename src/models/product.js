const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    idSeller: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    tags: [{
        type: String,
        required: true
    }],
    image: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Product', schema);