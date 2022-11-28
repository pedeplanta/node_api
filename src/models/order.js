const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    idSaller: {
        type: Number,
        required: true
    },
    idClient: {
        type: Number,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done', 'cancel'],
        default: 'created'
    },
    price: {
        type: Number,
        required: true
    },
    items: [{
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    messages: [{
        message: {
            type: String,
            required: true
        },
        idSaller: {
            type: Number,
            required: true
        },
        idClient: {
            type: Number,
            required: true
        },
        typeUser: {
            type: String,
            enum: ['vendedor', 'cliente'],
            required: true
        }
    }]
});

module.exports = mongoose.model('Order', schema);