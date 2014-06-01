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
            });
        } else {
            expandedContent.slideUp(0, function () {
                expandedContent.removeClass('visuallyhidden')
                    .slideDown(500);
            });
            $('html, body').animate({
                scrollTop: expander.offset().top + 70
            }, 700);
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
});