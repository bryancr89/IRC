// In memory track of users per channel.
// TODO: Use Redis.
var channels = [];

function getChannels() {
	// TODO: Should request the available channels to the database
	return [{
		id: 1,
		name: 'Node',
		description: 'Welcome to JS on the back-end'
	}, {
		id: 2,
		name: 'Android',
		description: 'Hello World'
	}];
}


module.exports = {
	getChannels: getChannels
};