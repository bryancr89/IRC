module.exports = function(io, socket) {
	io.on('connection', function (socket) {
		//TODO: Do we want to take an action when the user use the site?
	});

	io.on('disconnect', function (socket) {
		//TODO: Do we need to do a clean up?
	});

    socket.on('channel', function(channel) {
        console.log('Here', channel);
        socket.broadcast.emit('channel', channel);
    })
};