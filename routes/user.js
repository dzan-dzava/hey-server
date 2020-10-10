const express = require('express');
const api = express.Router();
const UserController = require('../controllers/user');

api.post('/signup', UserController.saveUser);

module.exports = api;