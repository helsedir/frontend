$(function () {
    $('.department .person').each(function () {
        $(this).addClass('visuallyhidden');
    });

    $('#helseoekonomiogfinansiering, #administrasjon, #primaerhelsetjenesten, #ehelseogit, #spesialisthelsetjenesten,#folkehelse ').on('click', function () {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;

        $(this).toggleClass('selected');
        var id = $(this).attr('id');
        var department = ".department." + id;
        $('.person', department).each(function () {
            if (!$(this).hasClass("visuallyhidden")) {
                $(this).slideUp('fast', function () {
                    $(this).addClass('visuallyhidden')
                        .slideDown(0);
                });
            } else {
                $(this).slideUp(0, function () {
                    $(this).removeClass('visuallyhidden')
                        .slideDown(500);
                });
            }
        });
        $('.sub-department', department).each(function () {
            var windowWidth = $(window).width();
            if (windowWidth <= 1199) {
                if (!$(this).hasClass("visuallyhidden")) {
                    $(this).slideUp('fast', function () {
                        $(this).addClass('visuallyhidden')
                            .slideDown(0);
                    });
                } else {
                    $(this).slideUp(0, function () {
                        $(this).removeClass('visuallyhidden')
                            .slideDown(500);
                    });
                }
            }
            else if ($(this).hasClass('visuallyhidden')) {
                $(this).removeClass('visuallyhidden');
            };
        });
    });

    $(window).on('load resize', function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 1199) {
            $(".sub-department").each(function () {
                $(this).addClass('visuallyhidden');
            });
        } else {
            $(".sub-department").each(function () {
                $(this).removeClass('visuallyhidden');
            });
        }
    });
});