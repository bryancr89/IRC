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
                //TODO: Show channel on main page.
                //TODO: Clean up fields.
            }
        });
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
    }

    function initializeChannelRedirect() {
        jQuery(document).on('click', '.channel', function() {
            window.sessionStorage.channelId = jQuery(this).data('channelId');
        });
    }

    function initializeChannel(socketIO) {
        socket = socketIO;
        initializeFormAddChannel();
        initializeChannelRedirect();
        initilizeUserName();
    }

    return {
        initializeChannel: initializeChannel
    }
})(jQuery);