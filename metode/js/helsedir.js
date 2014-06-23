$(function () {
    //creates collapsible headings. The tag wrapping this class will get an angle icon
    $(".accordion").each(function () {
        var collapseElement = $(this);
        var contentToHide = collapseElement.next();
        var parentTag = collapseElement.parent();
        contentToHide.addClass('visuallyhidden');
        parentTag.addClass('has-hidden-content');
    });

    //handles click events on collapsible headings
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
        }
    });

    //creates collapsible headings based on screen size
    $(window).on('load resize', function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 583) {
            $(".accordion_mobile").each(function () {
                var $collapseElement = $(this);
                var $contentToHide = $collapseElement.next();
                var $parentTag = $collapseElement.parent();
                if (!$contentToHide.hasClass('visuallyhidden') && !$parentTag.hasClass('has-visible-content') && !$parentTag.is('a')) {
                    $contentToHide.addClass('visuallyhidden');
                    $parentTag.addClass('has-hidden-content');
                }
            });
        } else {
            $(".accordion_mobile").each(function () {
                var $collapseElement = $(this);
                var $contentToHide = $collapseElement.next();
                var $parentTag = $collapseElement.parent();
                if (($contentToHide.hasClass('visuallyhidden') || $parentTag.hasClass('has-hidden-content')) && !$collapseElement.hasClass('accordion') && !$parentTag.is('a')) {
                    $contentToHide.removeClass('visuallyhidden');
                    $parentTag.removeClass('has-hidden-content');
                } else if ($parentTag.hasClass('has-visible-content')) {
                    $parentTag.removeClass('has-visible-content');
                }
            });
        }
    });
    //handles click events on collapsible mobile headings
    $(".accordion_mobile").click(function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 583) {
            var $header = $(this);
            var $content = $header.next();
            var $parent = $header.parent();
            if (!$header.hasClass('accordion')) {
                if ($parent.hasClass("has-hidden-content")) {
                    $parent.addClass("has-visible-content");
                    $parent.removeClass("has-hidden-content");
                    $content.slideUp(0, function () {
                        $content.removeClass('visuallyhidden')
                            .slideDown(500);
                    });
                } else {
                    $parent.removeClass("has-visible-content");
                    $parent.addClass("has-hidden-content");
                    $content.slideUp('fast', function () {
                        $content.addClass('visuallyhidden')
                            .slideDown(0);
                    });
                }
            }
        }
    });
    //styles tables. workaround for IE8
    $('table.table_general tr:nth-child(2n+1)').addClass('odd');

    $('#menushortcut').on('click', function () {
        var expandedContent = $(".js-expand");
        expandedContent.slideUp(0, function () {
            expandedContent.removeClass('visuallyhidden')
                .slideDown(500);
        });
        $('#tab_header1').focus();
    });

    //show/hide more news/conferences
    $('.showmorenews').on('click', function () {
        $(this).toggleClass('visuallyhidden').siblings().removeClass('visuallyhidden').slideUp(0).slideDown(700);
    });
});