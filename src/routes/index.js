const express = require('express');
const routes = express.Router();
const auth = require('./auth');
const user = require('./user');
const course = require('./course');

routes
    .use('/auth', auth)
    .use('/user', user)
    .use('/course', course);

module.exports = routes;