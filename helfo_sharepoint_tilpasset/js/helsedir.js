$(function () {
    //creates collapsible headings. The tag wrapping this class will get an angle icon
    $(".accordion").each(function () {
        var collapseElement = '';
        if ($(this).children(":first").is('h2')) {
            collapseElement = $(".accordion h2");
        }
        else if ($(this).children(":first").is('h3')) {
            collapseElement = $(".accordion h3");
        }
        collapseElement.addClass('collapse');
        var contentToHide = collapseElement.next();
        var parentTag = collapseElement.parent();
        contentToHide.addClass(' visuallyhidden');
        parentTag.addClass(' has-hidden-content');
    });

    $(".ms-rteElement-H1B, .ms-rteElement-H2B, .ms-rteElement-H3B, .ms-rteElement-H4B").each(function () {
        var collapseElement = $(this);
        collapseElement.nextUntil(':not(p)').addClass('visuallyhidden').css("padding-left", "42px");
        collapseElement.addClass('has-hidden-content');
    });

    //handles click events on collapsible headings
    $(".accordion h2, .accordion h3").click(function () {
        if (($(this)).hasClass('collapse')) {
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
        }
    });

    $(".ms-rteElement-H1B, .ms-rteElement-H2B, .ms-rteElement-H3B, .ms-rteElement-H4B").click(function () {
        var collapseElement = $(this);
        if (collapseElement.hasClass('has-visible-content')) {
            collapseElement.nextUntil(':not(p)').slideUp('fast', function () {
                $(this).addClass('visuallyhidden')
                    .slideDown(0);
            });
            collapseElement.removeClass("has-visible-content");
            collapseElement.addClass("has-hidden-content");
        } else {
            collapseElement.nextUntil(':not(p)').slideUp(0, function () {
                $(this).removeClass('visuallyhidden')
                    .slideDown(500);
            });
            collapseElement.addClass("has-visible-content");
            collapseElement.removeClass("has-hidden-content");
        }
    });

    $(window).on('load resize', function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 599) {
            $('#mainsearch, #mainsearchcolumn').css('width', windowWidth);
        }
        else {
            $('#mainsearch, #mainsearchcolumn').css('width', "");
        };
    });
    //creates collapsible headings based on screen size
    $(window).on('load resize', function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 899) {
            $(".accordion_mobile h2").each(function () {
                var $collapseElement = $(this);
                $collapseElement.addClass('collapse');
                var $contentToHide = $collapseElement.next();
                var $parentTag = $collapseElement.parent();
                if (!$contentToHide.hasClass('visuallyhidden') && !$parentTag.hasClass('has-visible-content') && !$parentTag.is('a')) {
                    $contentToHide.addClass(' visuallyhidden');
                    $parentTag.addClass(' has-hidden-content');
                }
            });
        } else {
            $(".accordion_mobile h2").each(function () {
                var $collapseElement = $(this);
                $collapseElement.removeClass('collapse');
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
    $(".accordion_mobile h2").click(function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 899) {
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

    //show/hide more news/conferences
    $('.showmorenews').on('click', function () {
        $(this).toggleClass('visuallyhidden').siblings().removeClass('visuallyhidden').slideUp(0).slideDown(700);
    });

    $('.order').on('click', function () {
        $('.shoppingcartbutton').toggle(800);
    });

    $('.module_feedback input:radio[name=contact]').click(function () {
        if ($('.hidden').hasClass('visuallyhidden')) {
            $('.hidden').slideUp(0, function () {
                $('.hidden').removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
    });

    $('.form-control').change(function () {
        $(this).addClass('selected');
    });

    $('.jumplink').click(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });

    $('a:not(:empty)').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    }).addClass("external-link");
});