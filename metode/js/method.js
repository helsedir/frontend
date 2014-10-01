$(function () {
    $(".accordion_method").each(function () {
        $(this).children('.more_information:first').addClass('visuallyhidden');
        $(this).addClass('has-hidden-content');
    });

    $(".method_evaluation").addClass('visuallyhidden');

    $(".informationicon").click(function (e) {
        var informationicon = $(this);
        var evaluation = $(this).siblings('.method_status').children('.method_evaluation:first');
        if (evaluation.hasClass("visuallyhidden")) {
            evaluation.slideUp(0, function () {
                evaluation.removeClass('visuallyhidden').slideDown(500);
            });
            informationicon.addClass('selected');
            informationicon.text('');
        } else {
            evaluation.slideUp('slow', function () {
                evaluation.addClass('visuallyhidden').slideDown(0);
            });

            informationicon.removeClass('selected');
            informationicon.text('?');
        }
    });

    $('.method_status').keydown(function (ev) {
        if (ev.which == 13) {
            var informationicon = $(this).children('.informationicon');
            var evaluation = $(this).children('.method_evaluation:first');
            if (evaluation.hasClass("visuallyhidden")) {
                evaluation.slideUp(0, function () {
                    evaluation.removeClass('visuallyhidden').slideDown(500);
                });
            } else {
                evaluation.slideUp('slow', function () {
                    evaluation.addClass('visuallyhidden').slideDown(0);
                });

                informationicon.removeClass('selected');
                informationicon.text('?');
            }

            if ($(this).hasClass("has-visible-content")) {
                $(this).children('.more_information:first').slideUp('fast', function () {
                    var child = $(this);
                    child.addClass('visuallyhidden').slideDown(0);
                });

                $(this).addClass('has-hidden-content').removeClass('has-visible-content');
            } else if ($(this).hasClass("has-hidden-content")) {
                $(this).children('.more_information:first').slideUp(0, function () {
                    var child = $(this);
                    child.removeClass('visuallyhidden')
                        .slideDown(500);
                });

                $(this).addClass('has-visible-content').removeClass('has-hidden-content');
            }
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