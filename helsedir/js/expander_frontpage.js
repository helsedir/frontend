$(document).ready(function () {
    "use strict";

    var expander = $(".js-expander"),
        expandedContent = $(".js-expand"),
         visible = false;

    expander.css("cursor", "pointer");

    /* expander.on('click', function () {
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
 */
    expander.click(function () {
        if (visible) {
            expandedContent.slideUp('fast', function () {
                expandedContent.addClass('hide')
                    .slideDown(0);
            });
        } else {
            expandedContent.slideUp(0, function () {
                expandedContent.removeClass('hide')
                    .slideDown(500);
            });
            $('html, body').animate({
                scrollTop: expandedContent.offset().top
            }, 700);
        }
        visible = !visible;
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

    $('#menushortcut').on('click', function () {
        if (visible) {
            expandedContent.slideUp('fast', function () {
                expandedContent.addClass('hide')
                    .slideDown(500);
            });
        } else {
            expandedContent.slideUp(0, function () {
                expandedContent.removeClass('hide')
                    .slideDown(500);
            });
        }
        visible = !visible;
    });
});