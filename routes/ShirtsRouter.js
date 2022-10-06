const Router = require('express').Router();
const controller = require('../controller/Shirts');

Router.get('/', controller.GetAllShirts);
Router.get('/:id', controller.GetShirtById);
Router.post('/', controller.CreateShirt)

module.exports = Router;