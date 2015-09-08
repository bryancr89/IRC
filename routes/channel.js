var express = require('express');
var channelsService = require('../services/channels');
var router = express.Router();
var socket;

/* GET channel. */
router.get('/', function (req, res, next) {
    //TODO: Render the channel view, showing the latest 5 messages.
});

router.get('/:id', function (req, res, next) {
    channelsService.getChannel(req.params.id, function(err, channel) {
        if(err) {
            throw err;
        }
        console.log(channel);
        res.render('channel', {channel: channel});
    });
});

router.post('/', function (req, res, next) {
    channelsService.addChannel(req.body, function (err, channel) {

        if (err) {
            throw err;
        }
        res.send(channel);
    });
});

module.exports = router;
