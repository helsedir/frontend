$(document).ready(function () {
    "use strict";

    var expander = $(".js-expander"),
        expandedContent = $(".js-expand"),
        expandedText = $(".js-expander-innhold");

    expander.css("cursor", "pointer");
    expandedContent.addClass("visuallyhidden");
    expandedText.text('Start');

    expander.on('click', function () {
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
});