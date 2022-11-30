const repository = require('../repositories/order-repository');
const guid = require('guid');
const authService = require('../services/auth-service');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        await repository.create({
            customer: data.id,
            idSeller: data.idSeller,
            idClient: data.idClient,
            price: data.price,
            number: guid.raw().substring(0, 6),
            items: req.body.items,
            messages: data.messages
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.putMessage = async(req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        let body = {
            customer: data.id,
            idSeller: data.idSeller,
            idClient: data.idClient,
            price: data.price,
            number: guid.raw().substring(0, 6),
            items: req.body.items,
            messages: data.messages
        };

        repository.updateMessage(body.id, body);
        res.status(200).send({
            message: 'Pedido atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.putStatus = async(req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    const data = await authService.decodeToken(token);

    let body = {
        customer: data.id,
        idSeller: data.idSeller,
        idClient: data.idClient,
        price: data.price,
        number: guid.raw().substring(0, 6),
        items: req.body.items,
        messages: data.messages
    };

    try {
        repository.updateStatus(body.id, body);
        res.status(200).send({
            message: 'Pedido atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.putPrice = async(req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    const data = await authService.decodeToken(token);

    let body = {
        customer: data.id,
        idSeller: data.idSeller,
        idClient: data.idClient,
        price: data.price,
        number: guid.raw().substring(0, 6),
        items: req.body.items,
        messages: data.messages
    };

    try {
        repository.updatePrice(body.id, body);
        res.status(200).send({
            message: 'Pedido atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}