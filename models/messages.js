var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messages = new Schema({
    name: String,
    description: String
});

module.exports = mongoose.model('messages', messages);