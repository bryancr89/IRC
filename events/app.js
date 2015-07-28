module.exports = function(io) {
	io.on('connection', function (socket) {
		//TODO: Do we want to take an action when the user use the site?
	});

	io.on('disconnect', function (socket) {
		//TODO: Do we need to do a clean up?
	});
};