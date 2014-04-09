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
            expandedContent.removeClass("visuallyhidden");
            expandedText.text('Velg');
            expander.addClass("js-expanded");
        } else {
            expandedText.text('Start');
            expander.removeClass("js-expanded");
            expandedContent.addClass("visuallyhidden");
        }
    });

});