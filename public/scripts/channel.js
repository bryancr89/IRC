window.IRC = window.IRC || {};
window.IRC.channel = (function(jQuery) {
    var socket;

    function submitForm(data) {
        jQuery.ajax({
            method: 'POST',
            url: '/channel',
            data: data,
            success: function() {
                console.log('added');
            }
        })
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
    }

    return {
        initializeChannel: initializeChannel
    }
})(jQuery);