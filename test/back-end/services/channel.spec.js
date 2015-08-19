var expect = require('chai').expect;
var sinon = require('sinon');
var channels = require('../../../services/channels');

describe('Channel Service', function () {
	it('Should be true', function() {
		sinon.spy(channels, 'getChannels');
		expect(channels.getChannels).to.have.been.called;
		expect(channels.getChannels).not.to.be.undefined;
		console.log(channels.getChannels.toString());
	});
});