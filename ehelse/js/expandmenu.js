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
            expander.addClass('js-expanded');

            if ($('.menubutton:hidden')) {
                $('.menubutton').children('.js-expanded').css('padding-bottom', '0');
            }

            if ($('#mobilesearch').hasClass('js-expanded')) {
                $('#mobilesearch').removeClass('js-expanded');
                $('#mainsearchcolumn').slideUp(500);
            };
        }
        visible = !visible;
    });

    $('#mobilesearch').on('click', function () {
        if ($('#mainsearchcolumn').is(':visible')) {
            $(this).removeClass('js-expanded');
            $('#mainsearchcolumn').slideUp(500);
        } else {
            $(this).addClass('js-expanded');
            $('#mainsearchcolumn').slideDown(500);
            $('#mainsearchcolumn input').focus();
            if ($('#mobilemenu').hasClass('js-expanded')) {
                $('.js-expand').addClass('visuallyhidden');
                $('#mobilemenu').removeClass('js-expanded');
            };
        }
    });
});