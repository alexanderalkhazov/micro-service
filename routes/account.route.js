
const express = require('express');
const router = express.Router();
const { login, logout } = require('../conrollers/account.controller');


router.post('/login', login);

router.post('/logout', logout);

module.exports = { router };


