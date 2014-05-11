$(document).ready(function () {
    "use strict";

    var expander = $(".js-expander"),
        expandedContent = $(".js-expand"),
        expandedText = $(".js-expander-innhold");

    expander.css("cursor", "pointer");
    expandedContent.addClass("visuallyhidden");
    expandedText.text('Start');

    expander.on('click', function () {
        $('.hidden-mobile').hide();
        $('.js-expanded').not(this).removeClass('js-expanded');

        if (expandedContent.hasClass("visuallyhidden")) {
            expandedText.text('Velg');
            expander.addClass("js-expanded");
            expandedContent.removeClass("visuallyhidden");
        } else {
            expandedText.text('Start');
            expander.removeClass("js-expanded");
            expandedContent.addClass("visuallyhidden");
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