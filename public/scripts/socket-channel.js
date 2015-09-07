jQuery(function(window) {
    window.IRC = window.IRC || {};
    window.socket.on('connect', function() {
        IRC.messages.initializeMessages(socket);
    });
    socket.emit('join', window.sessionStorage.channelId);
}(window));