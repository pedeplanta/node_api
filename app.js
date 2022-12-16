const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./src/config');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const Product = require('./src/models/product');
const Customer = require('./src/models/customer');
const Order = require('./src/models/order');

// Carrega as Rotas
const indexRoute = require('./src/routes/index');
const productRoute = require('./src/routes/product-route');
const customerRoute = require('./src/routes/customer-route');
const orderRoute = require('./src/routes/order-route');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;