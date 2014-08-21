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
            expander.removeClass('js-expanded');
            expander.blur();
        } else {
            expandedContent.slideUp(0, function () {
                expandedContent.removeClass('visuallyhidden')
                    .slideDown(500);
            });
            $('html, body').animate({
                scrollTop: expander.offset().top + 70
            }, 700);
            expander.addClass('js-expanded');
        }
        visible = !visible;
    });

    $('.hide_menu').on('click', function () {
        expandedContent.slideUp('fast', function () {
            expandedContent.addClass('visuallyhidden')
                .slideDown(0);
        });
        expander.removeClass('js-expanded');
        expander.blur();
        visible = !visible;
    });

    expander.keydown(function (ev) {
        if (ev.which == 13) {
            if (visible) {
                expandedContent.slideUp('fast', function () {
                    expandedContent.addClass('visuallyhidden')
                        .slideDown(0);
                });
                expander.removeClass('js-expanded');
                expander.blur();
            } else {
                expandedContent.slideUp(0, function () {
                    expandedContent.removeClass('visuallyhidden')
                        .slideDown(500);
                });
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