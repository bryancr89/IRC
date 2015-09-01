var messageService = require('../services/messages');
module.exports = function(io, socket) {
    socket.on('join', function (channelId) {
        console.log('Joined Channel', channelId);
        socket.room = channelId;
        socket.join(channelId);
    });

    socket.on('message', function (data) {
        messageService.addMessage(data, function (err, message) {
            socket.broadcast.to(socket.room).emit('message', message);
        });
    });
};