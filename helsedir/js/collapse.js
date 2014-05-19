$(".accordion").click(function () {
    $header = $(this);
    $content = $header.next();
    $parent = $header.parent();

    if ($content.is(":visible")) {
        $header.removeClass("js-expanded");
        $content.slideUp(500);
        $parent.removeClass('has-visible-content');
        $parent.addClass('has-hidden-content');
    } else {
        $header.addClass("js-expanded");
        $parent.addClass('has-visible-content');
        $parent.removeClass('has-hidden-content');
        $content.slideDown(300);
        $('html, body').animate({
            scrollTop: $header.offset().top
        }, 500);
    }
});

$(function () {
    $(".accordion").each(function () {
        $collapseElement = $(this);
        $contentToHide = $collapseElement.next();
        $parentTag = $collapseElement.parent();

        $contentToHide.hide();
        $parentTag.addClass('has-hidden-content');
    });
});