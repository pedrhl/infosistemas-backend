const express = require('express');
const CarController = require('./controller/CarController');

const route = express.Router();

route.get('/cars', CarController.index);
route.get('/:id', CarController.show);
route.post('/', CarController.store);
route.put('/:id', CarController.update);
route.delete('/:id', CarController.destroy);

module.exports = route;