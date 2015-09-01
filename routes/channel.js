var express = require('express');
var channelsService = require('../services/channels');
var router = express.Router();

/* GET channel. */
router.get('/', function (req, res, next) {
    //TODO: Render the channel view, showing the latest 5 messages.
});

router.get('/:id', function (req, res, next) {
    channelsService.getChannel(req.params.id, function(err, channel) {
        if(err) {
            throw err;
        }
        res.render('channel', {channel: channel});
    });
});

router.post('/', function (req, res, next) {
    channelsService.addChannel(req.body, function (err) {
        if (err) {
            throw err;
        }
        res.send();
    });
});

module.exports = router;
