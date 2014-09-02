$(document).ready(function () {
    "use strict";

    var expander = $(".js-expander"),
        expandedContent = $(".js-expand"),
         visible = false;

    expander.css("cursor", "pointer");

    expander.click(function () {
        if (visible) {
            expandedContent.slideUp(500);
            expander.removeClass('js-expanded');
            expander.blur();
        } else {
            expandedContent.slideDown(500);
            $('html, body').animate({
                scrollTop: expander.offset().top + 70
            }, 700);
            expander.addClass('js-expanded');
        }
        visible = !visible;
    });
    expander.keydown(function (ev) {
        if (ev.which == 13) {
            if (visible) {
                expandedContent.slideUp(500);
                expander.removeClass('js-expanded');
                expander.blur();
            } else {
                expandedContent.slideDown(500);
                $('html, body').animate({
                    scrollTop: expander.offset().top + 70
                }, 700);
                expander.addClass('js-expanded');
            }
            visible = !visible;
            $('#tab_header1').focus();
        }
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