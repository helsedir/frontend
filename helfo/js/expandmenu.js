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

            if ($('#mobilesearch').hasClass('js-expanded')) {
                $('#mobilesearch').removeClass('js-expanded');
                $('#mainsearchcolumn').slideUp(500);
            };
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

                expander.addClass('js-expanded');
            }
            visible = !visible;
            $('#tab_header1').focus();
        }
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
                $('#mobilemenu').removeClass('js-expanded');
                expandedContent.slideUp(500);
            };
        }
    });
});