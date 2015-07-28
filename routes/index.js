var express = require('express');
var channelService = require('../services/channel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', channels: channelService.getChannels() });
});

module.exports = router;
