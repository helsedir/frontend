$(function () {
    $(".accordion_method").each(function () {
        $(this).children('.more_information:first').addClass('visuallyhidden');
        $(this).addClass('has-hidden-content');
    });

    $(".method_evaluation").addClass('visuallyhidden');

    $("#method_evaluation_link").click(function (e) {
        if ($('.method_evaluation').hasClass("visuallyhidden")) {
            $(".method_evaluation").slideUp(0, function () {
                $(".method_evaluation").removeClass('visuallyhidden').slideDown(500);
            });
            $(this).addClass('selected');
        } else {
            $(".method_evaluation").slideUp('slow', function () {
                $(".method_evaluation").addClass('visuallyhidden').slideDown(0);
            });
            $(this).removeClass('selected');
        }
    });

    //handles click events on collapsible headings
    $(".accordion_method").click(function () {
        if ($(this).hasClass("has-visible-content")) {
            $(this).children('.more_information:first').slideUp('fast', function () {
                var child = $(this);
                child.addClass('visuallyhidden').slideDown(0);
            });

            $(this).addClass('has-hidden-content').removeClass('has-visible-content');
        }
        else if ($(this).hasClass("has-hidden-content")) {
            $(this).children('.more_information:first').slideUp(0, function () {
                var child = $(this);
                child.removeClass('visuallyhidden')
                    .slideDown(500);
            });

            $(this).addClass('has-visible-content').removeClass('has-hidden-content');
        }
    });
});