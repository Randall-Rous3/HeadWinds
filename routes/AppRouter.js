
const Router = require('express').Router();
const ShirtsRouter = require('./ShirtsRouter')

Router.use('/shirts', ShirtsRouter);

module.exports = Router;