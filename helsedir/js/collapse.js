$(".collapse").click(function () {
    $header = $(this);
    $content = $header.next();
    $parent = $header.parent();

    $content.toggleClass('visuallyhidden');
    if ($parent.hasClass("has-hidden-content")) {
        $parent.addClass("has-visible-content");
        $parent.removeClass("has-hidden-content");
    } else {
        $parent.removeClass("has-visible-content");
        $parent.addClass("has-hidden-content");
    }
});

$(function () {
    $(".collapse").parent().addClass("has-hidden-content");
});