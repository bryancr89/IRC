var messagesModel = require('../models/messages');

function getMessages(channelId, callback) {
    messagesModel.find({channelId: channelId}, function gotChannels(err, messages) {
        if(err) {
            throw err;
        }
        callback(null, messages || []);
    });
}

function addMessage(message, callback) {
    var newMessage = new messagesModel({
        channelId: message.channelId,
        text: message.text,
        sender: message.sender,
        date: message.date
    });

    newMessage.save(callback);
}


module.exports = {
    addMessage: addMessage,
    getMessages: getMessages
};