jQuery(function(window) {
    window.IRC = window.IRC || {};
    window.socket.on('connect', function() {
        IRC.messages.initializeMessages(socket);
        IRC.messages.initializeAddMessage();
    });
    socket.emit('join', window.sessionStorage.channelId);
}(window));