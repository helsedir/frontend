$(document).ready(function () {

    "use strict";

    var mq = window.matchMedia("(max-width: 600px)");

    var togglers = $(".js-toggler"),
        toggledContent = togglers.nextAll(),
        toggledContentParent = togglers.parent();


    function hideContentOnNarrow() {

        var narrow = mq.matches;

        console.log(narrow);


        if (narrow) {
            toggledContent.addClass("visuallyhidden");
            togglers.addClass("pseudo-link");
            toggledContentParent.addClass("has-hidden-content");

        } else {
            toggledContent.removeClass("visuallyhidden");
            togglers.removeClass("pseudo-link");
            toggledContentParent.removeClass("has-visible-content").removeClass("has-hidden-content");
        }

    }

    function enableToggleForNarrow() {
        togglers.on('click', function () {

            var narrow = mq.matches;

            if (narrow) {

                var clickedElement = $(this),
                    clickedElementParent = clickedElement.parent();

                clickedElement.nextAll().toggleClass("visuallyhidden");

                if (!clickedElement.nextAll().hasClass("visuallyhidden")) {
                    clickedElementParent.addClass("has-visible-content");
                    clickedElementParent.removeClass("has-hidden-content");
                } else {
                    clickedElementParent.removeClass("has-visible-content");
                    clickedElementParent.addClass("has-hidden-content");
                }
            }
        });
    }

    $(hideContentOnNarrow);
    $(enableToggleForNarrow);

    $(window).resize(hideContentOnNarrow);
    $(window).on("orientationchange", hideContentOnNarrow);

});