window.IRC = window.IRC || {};
window.IRC.channel = (function(jQuery) {
    var socket;

    function submitForm(data) {
        jQuery.ajax({
            method: 'POST',
            url: '/channel',
            data: data,
            // response = {channelId, name, description}
            success: function(response) {
                broadCastNewChannel(response);
                showChannel(response);
            }
        });
    }

    function broadCastNewChannel(channel) {
        window.socket.emit('channel', channel);
    }

    function initializeEventsListener() {
        window.socket.on('channel', function(newChannel) {
            showChannel(newChannel);
        });
    }

    function showChannel(newChannel) {
        var html = createChannelHtml(newChannel);
        jQuery('.channelsContainer').append(html);
    }

    function createChannelHtml(newchannel) {
        return '<a class="channelItem" href="/channel/'+ newchannel._id +'" data-channel-id="'+ newchannel._id +'"><span>' + newchannel.name+ '</span><span>'
            + newchannel.description + '</span></a>'
    }

    //TODO: Add Initialize listener function.
    //TODO: Listen for new channels.
    //TODO: Draw the new channel.

    function initilizeUserName() {
        jQuery('#setName').click(function() {
            var nickname = jQuery('#nickname').val().trim();
            if(nickname) {
                window.sessionStorage.nickname = nickname;
            }
        });
    }

    function initializeFormAddChannel() {
        var $submit = jQuery('#addNewChannel');

        $submit.on('click', function(e) {
            e.preventDefault();
            var data = jQuery('form#newChannel').serializeArray();
            submitForm(data);
        });

        jQuery('#toggleForm').click(function(e) {
            e.preventDefault();
            jQuery('#newChannel').toggle();
        })
    }

    function initializeChannelRedirect() {
        jQuery(document).on('click', '.channelItem', function() {
            window.sessionStorage.channelId = jQuery(this).data('channelId');
        });
    }

    function initializeChannel(socketIO) {
        socket = socketIO;
        initializeFormAddChannel();
        initializeEventsListener();
        initializeChannelRedirect();
        initilizeUserName();
    }

    return {
        initializeChannel: initializeChannel
    }
})(jQuery);