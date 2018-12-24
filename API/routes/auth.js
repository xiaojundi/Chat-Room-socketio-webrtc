const express = require('express');

var app = express();

var auth = require('../controllers/auth.controller');

var router = express.Router();
//login
router.post('/user/login', auth.userLogin);
//registration
router.post('/user/register', auth.userRegistration);

module.exports = router;