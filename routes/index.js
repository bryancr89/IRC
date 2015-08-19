var express = require('express');
var channelService = require('../services/channels');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    channelService.getChannels(function(channels) {
        console.log(channels);
        res.render('index', {title: 'Express', channels: channels});
    });
});

module.exports = router;