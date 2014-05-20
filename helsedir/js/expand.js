$(document).ready(function () {
    "use strict";

    var expander = $(".js-expander"),
        expandedContent = $(".js-expand");

    expander.css("cursor", "pointer");
    expandedContent.hide();

    expander.on('click', function () {
        $('.js-expanded').not(this).removeClass('js-expanded');

        if (expandedContent.is(":visible")) {
            expander.removeClass("js-expanded");
            expandedContent.slideUp(500);
        } else {
            expander.addClass("js-expanded");
            expandedContent.slideDown(500);
            $('html, body').animate({
                scrollTop: expandedContent.offset().top
            }, 700);
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