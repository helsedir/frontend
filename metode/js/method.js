$(function () {
    $(".accordion_method").each(function () {
        var heading = $(this);
        heading.children().not('h2, .fa').each(function () {
            var child = $(this);
            child.addClass('visuallyhidden');
        });
        heading.children('h2').addClass('blur');

        heading.addClass('has-hidden-content');
    });

    $(".method_evaluation").addClass('visuallyhidden');

    $("#method_evaluation_link").click(function () {
        if ($('.method_evaluation').hasClass("visuallyhidden")) {
            $(".method_evaluation").slideUp(0, function () {
                $(".method_evaluation").removeClass('visuallyhidden').slideDown(500);
            });
            $(this).addClass('selected');
        } else {
            $(".method_evaluation").slideUp('fast', function () {
                $(".method_evaluation").addClass('visuallyhidden').slideDown(0);
            });
            $(this).removeClass('selected');
        }
    });

    //handles click events on collapsible headings
    $(".accordion_method").click(function () {
        var heading = $(this);
        if (heading.hasClass("has-visible-content")) {
            heading.children().not('h2, .fa').each(function () {
                var child = $(this);
                child.slideUp('fast', function () {
                    child.addClass('visuallyhidden').slideDown(0);
                });
            });
            heading.children('h2').addClass('blur');
            heading.removeClass('has-visible-content');
            heading.addClass('has-hidden-content');
        }
        else if (heading.hasClass("has-hidden-content")) {
            heading.children().not('h2, .fa').each(function () {
                var child = $(this);
                child.slideUp(0, function () {
                    child.removeClass('visuallyhidden')
                        .slideDown(500);
                });
            });
            heading.children('h2').removeClass('blur');

            heading.removeClass('has-hidden-content');
            heading.addClass('has-visible-content');
        }
    });
});