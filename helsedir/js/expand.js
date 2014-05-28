$(document).ready(function () {
    "use strict";

    var expander = $(".js-expander"),
        expandedContent = $(".js-expand"),
         visible = false;

    expander.css("cursor", "pointer");

    expander.click(function () {
        if (visible) {
            expandedContent.slideUp('fast', function () {
                expandedContent.addClass('visuallyhidden')
                    .slideDown(0);
                expander.removeClass('js-expanded');
            });
        } else {
            expandedContent.slideUp(0, function () {
                expandedContent.removeClass('visuallyhidden')
                    .slideDown(500);
                expander.addClass('js-expanded');
            });
        }
        visible = !visible;
    });

    $('#mobilesearch').on('click', function () {
        if ($('#mainsearch').is(':visible')) {
            $(this).removeClass('js-expanded');
            $('#mainsearch').slideUp(500);
        } else {
            $(this).addClass('js-expanded');
            $('#mainsearch').slideDown(500);
            $('#mainsearch input').focus();
        }
    });

    $('#menushortcut').on('click', function () {
        if (visible) {
            expandedContent.slideUp('fast', function () {
                expandedContent.addClass('visuallyhidden')
                    .slideDown(500);
            });
        } else {
            expandedContent.slideUp(0, function () {
                expandedContent.removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
        visible = !visible;
    });
});