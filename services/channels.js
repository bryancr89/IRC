var channelsModel = require('../models/channels');

// TODO: Use Redis.
var channels = [];

function getChannels(callback) {
	channelsModel.find({}, function gotChannels(err, channels) {
        if(err) {
            throw err;
        }
        callback(channels);
    });
}


module.exports = {
	getChannels: getChannels
};