const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authService = require('../services/auth-service');

//fazer put e delete para vendedor
router.get('/', authService.authorize, controller.get);
router.post('/', authService.authorize, controller.post);
router.put('/messages/:id', authService.authorize, controller.putMessage);
router.put('/status/:id', authService.authorize, controller.putStatus);
router.put('/price/:id', authService.authorize, controller.putPrice);

module.exports = router;