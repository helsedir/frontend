$(function () {
    $(".accordion").each(function () {
        var collapseElement = $(this);
        var contentToHide = collapseElement.next();
        var parentTag = collapseElement.parent();
        contentToHide.addClass('visuallyhidden');
        parentTag.addClass('has-hidden-content');
    });

    $(".accordion").click(function () {
        var collapseElement = $(this);
        var contentToHide = collapseElement.next();
        var parentTag = collapseElement.parent();

        if (!contentToHide.hasClass("visuallyhidden")) {
            contentToHide.slideUp('fast', function () {
                contentToHide.addClass('visuallyhidden')
                    .slideDown(0);
            });
            parentTag.removeClass("has-visible-content");
            parentTag.addClass("has-hidden-content");
        } else {
            contentToHide.slideUp(0, function () {
                contentToHide.removeClass('visuallyhidden')
                    .slideDown(500);
            });
            parentTag.addClass("has-visible-content");
            parentTag.removeClass("has-hidden-content");
            $('html, body').animate({
                scrollTop: collapseElement.offset().top
            }, 700);
        }
    });
});

function checkTilskudd() {
    if ($('#gjeldende_tilskudd').is(':checked')) {
        $('#tilskuddsaar').hide(500);
    } else if ($('#utgaatte_tilskudd').is(':checked')) {
        $('#tilskuddsaar').show(500);
        $('#tilskuddsaar').focus();
    }
}