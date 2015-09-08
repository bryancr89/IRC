window.IRC = window.IRC || {};
window.IRC.messages = (function(jQuery) {
    var socket;

    function initializeAddMessage() {
        jQuery(document).on('keyup', '#addNewMessage', function(e) {
            var nickname = window.sessionStorage.nickname,
                channelId = window.sessionStorage.channelId;
            if (e.keyCode == 13) {
                var message = jQuery(this).val();
                IRC.messages.sendMessage({
                    channelId: channelId,
                    text: message,
                    sender: nickname,
                    date: new Date()
                });
                jQuery(this).val('');
            }
        });
    }

    function sendMessage(message) {
        showMessage(message);
        socket.emit('message', message);
    }

    function initializeEventsListener() {
        window.socket.on('message', function(newMessage) {
            showMessage(newMessage);
        })
    }

    function showMessage(newMessage) {
        var html = createMessageHtml(newMessage);
        jQuery('#messages').append(html);
    }

    function createMessageHtml(newMessage) {
        return '<li><span class="date">' + newMessage.date + '</span><span class="sender">'
            + newMessage.sender + '</span><span class="text">' + newMessage.text + '</span></li>'
    }

    function initializeMessages(socketIO) {
        socket = socketIO;
        initializeEventsListener();
        initializeAddMessage();
    }

    return {
        initializeMessages: initializeMessages,
        sendMessage: sendMessage
    }
})(jQuery);