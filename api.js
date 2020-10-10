const express = require('express');
const api = express.Router();
const userRoutes = require('./routes/user');

api.use('/user', userRoutes);

module.exports = api;