var channelsModel = require('../models/channels');
var messagesService = require('../services/messages');

// TODO: Use Redis.
var channels = [];

function getChannels(callback) {
	channelsModel.find({}, function gotChannels(err, channels) {
        if(err) {
            throw err;
        }
        callback(null, channels);
    });
}

function getChannel(id, callback) {
    channelsModel.findById(id, function gotChannelById(err, channel) {
        if(err) {
            throw err;
        }
        messagesService.getMessages(channel._id, function(err, messages) {
            if(err) {
                throw err;
            }
            channel.messages = messages;
            callback(null, channel);
        });
    });
}

function addChannel(channel, callback) {
    var newChannel = new channelsModel({
        name: channel.name,
        description: channel.description
    });

    newChannel.save(callback);
}


module.exports = {
    addChannel: addChannel,
    getChannel: getChannel,
	getChannels: getChannels
};