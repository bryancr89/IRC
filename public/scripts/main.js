jQuery(function(window) {
    window.IRC = window.IRC || {};
    window.socket = window.io('http://localhost:8000');
    socket.on('connect', function() {
        IRC.channel.initializeChannel(socket);
    });
}(window));