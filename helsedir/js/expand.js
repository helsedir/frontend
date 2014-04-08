$(document).ready(function () {

    "use strict";

    var expander = $(".js-expander"),
        expandedContent = $(".js-expand"),
        expandedText = $(".js-expander-innhold");

    expander.css("cursor", "pointer");
    expandedContent.hide();
    expandedText.text('Start');

    expander.on('click', function() {

        expandedContent.toggle();

        if (expandedContent.is(":visible")) {
            expandedText.text('Velg');
            expander.addClass("js-expanded");
        } else {
            expandedText.text('Start');
            expander.removeClass("js-expanded");
        }
    });

});