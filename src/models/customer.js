const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
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
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    photo: {
        type: String,
        required: false
    },
    cpf: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    addressNumber: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }]
});

module.exports = mongoose.model('Customer', schema);