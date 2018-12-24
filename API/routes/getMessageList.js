const express = require('express');

var app = express();

var messageList = require('../controllers/message.controller');

var router = express.Router();

//get message
router.get('/user/messageList', messageList.message);

module.exports = router;



