var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messages = new Schema({
    text: String,
    sender: String,
    date: Date,
    channelId: String
});

module.exports = mongoose.model('messages', messages);