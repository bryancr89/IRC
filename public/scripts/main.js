jQuery(function(window) {
    window.IRC = window.IRC || {};
    window.socket = window.io('http://localhost:8000');
    socket.on('connect', function() {
        IRC.channel.initializeChannel(socket);
        initilizeUserName();
    });

    function initilizeUserName() {
        jQuery('#setName').click(function() {
            var nickname = jQuery('#nickname').val().trim();
            if(nickname) {
                window.sessionStorage.nickname = nickname;
            }
        });
    }
}(window));