const Router = require('express').Router();
const controller = require('../controller/Shirts');

Router.get('/', controller.GetAllShirts);

module.exports = Router;