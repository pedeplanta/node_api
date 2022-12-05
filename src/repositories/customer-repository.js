const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}

exports.authenticate = async(data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}

exports.getById = async(id) => {
    const res = await Customer.findById(id);
    return res;
}

exports.getByRoles = async(roles) => {
    const res = Customer
        .find({
            roles: [roles],
        }, 'name _id');
    return res;
}

exports.updatePassword = async(id, data) => {
    await Customer.findByIdAndUpdate(
        id, {
            name: data.name,
            email: data.email,
            password: data.password
        }
    )
}

