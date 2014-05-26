$(window).on('load resize', function () {
    var windowWidth = $(window).width();

    if (windowWidth <= 583) {
        $("h2").each(function () {
            $collapseElement = $(this);
            $contentToHide = $collapseElement.next();
            $parentTag = $collapseElement.parent();
            if (!$contentToHide.hasClass('hide') && !$parentTag.hasClass('has-visible-content') && !$parentTag.is('a')) {
                $contentToHide.addClass('hide');
                $parentTag.addClass('has-hidden-content');
            }
        });
    }
    else {
        $("h2").each(function () {
            $collapseElement = $(this);
            $contentToHide = $collapseElement.next();
            $parentTag = $collapseElement.parent();
            if (($contentToHide.hasClass('hide') || $parentTag.hasClass('has-hidden-content')) && !$collapseElement.hasClass('accordion') && !$parentTag.is('a')) {
                $contentToHide.removeClass('hide');
                $parentTag.removeClass('has-hidden-content');
            }
            else if ($parentTag.hasClass('has-visible-content')) {
                $parentTag.removeClass('has-visible-content');
            };
        });
    }
});

$("h2").click(function () {
    var windowWidth = $(window).width();

    if (windowWidth <= 583) {
        $header = $(this);
        $content = $header.next();
        $parent = $header.parent();
        if (!$header.hasClass('accordion')) {
            if ($parent.hasClass("has-hidden-content")) {
                $parent.addClass("has-visible-content");
                $parent.removeClass("has-hidden-content");
                $content.slideUp(0, function () {
                    $content.removeClass('hide')
                        .slideDown(500);
                });
                $('html, body').animate({
                    scrollTop: $content.offset().top
                }, 700);
            } else {
                $parent.removeClass("has-visible-content");
                $parent.addClass("has-hidden-content");
                $content.slideUp('fast', function () {
                    $content.addClass('hide')
                        .slideDown(0);
                });
            }
        }
    }
});