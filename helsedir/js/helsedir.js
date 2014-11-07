$(function () {
    //creates collapsible headings. The tag wrapping this class will get an angle icon
    /*  $(".accordion h2, .accordion h3, .accordion h4, .accordion h5").each(function () {
          var collapseElement = $(this);
          var contentToHide = collapseElement.nextUntil(':not(p)');
          var parentTag = collapseElement.parent();
          contentToHide.addClass(' visuallyhidden');
          parentTag.addClass(' has-hidden-content');
      });
      */
    $(".ms-rteElement-H1B, .ms-rteElement-H2B, .ms-rteElement-H3B, .ms-rteElement-H4B").each(function () {
        var collapseElement = $(this);
        collapseElement.addClass('has-hidden-content');

        if (collapseElement.hasClass("ms-rteElement-H2B")) {
            collapseElement.nextUntil('h2').addClass('visuallyhidden').css("padding-left", "42px");
        } else {
            collapseElement.nextUntil(':not(p)').addClass('visuallyhidden').css("padding-left", "42px");
        }
    });

    //handles click events on collapsible headings
    /*$(".accordion h2, .accordion h3, .accordion h4, .accordion h5").click(function () {
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
    */
    $(".ms-rteElement-H1B, .ms-rteElement-H2B, .ms-rteElement-H3B, .ms-rteElement-H4B").click(function () {
        var collapseElement = $(this);
        console.log(collapseElement);
        if (collapseElement.hasClass('has-visible-content')) {
            if (collapseElement.hasClass("ms-rteElement-H2B")) {
                collapseElement.nextUntil('h2').slideUp('fast', function () {
                    $(this).addClass('visuallyhidden')
                        .slideDown(0);
                });
            }
            else {
                collapseElement.nextUntil(':not(p)').slideUp('fast', function () {
                    $(this).slideUp('fast', function () {
                        $(this).addClass('visuallyhidden')
                            .slideDown(0);
                    });
                });
            }
            collapseElement.removeClass("has-visible-content");
            collapseElement.addClass("has-hidden-content");
        }
        else {
            if (collapseElement.hasClass("ms-rteElement-H2B")) {
                collapseElement.nextUntil('h2').slideUp(0, function () {
                    $(this).removeClass('visuallyhidden')
                        .slideDown(500);
                });
            }
            else {
                collapseElement.nextUntil(':not(p)').slideUp(0, function () {
                    $(this).removeClass('visuallyhidden')
                        .slideDown(500);
                });
            }
            collapseElement.addClass("has-visible-content");
            collapseElement.removeClass("has-hidden-content");
        }
    });

    //creates collapsible headings based on screen size
    $(window).on('load resize', function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 599) {
            $(".accordion_mobile h2").each(function () {
                var $collapseElement = $(this);
                var $contentToHide = $collapseElement.next();
                var $parentTag = $collapseElement.parent();
                if (!$contentToHide.hasClass('visuallyhidden') && !$parentTag.hasClass('has-visible-content') && !$parentTag.is('a')) {
                    $contentToHide.addClass(' visuallyhidden');
                    $parentTag.addClass(' has-hidden-content');
                }
            });
            //stretch search field in header to window width on mobile screens
            $('#mainsearch, #mainsearchcolumn').css('width', windowWidth);
        } else {
            $(".accordion_mobile h2").each(function () {
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
    $(".accordion_mobile h2").click(function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 599) {
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
    $('table.ms-rteTable-default tr:nth-child(2n+1)').addClass('odd');

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

    $('.order').on('click', function () {
        $('.shoppingcartbutton').toggle(800);
    });

    $('a:not(:empty)').filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    }).addClass("external-link");

    $('.external-link').each(function () {
        if ($(this).parent('p').length > 0) {
            var tekst = $(this).parent().clone() //clone the element
                .children() //select all the children
                .remove() //remove all the children
                .end() //again go back to selected element
                .text(); //get the text of element
            if ($.trim(tekst) != '') {
                $(this).addClass('inline');
            }
        }
    });
});