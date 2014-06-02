$(function () {
    $('.department').each(function () {
        $(this).addClass('visuallyhidden');
    });

    $('#folkehelse').on('click', function () {
        $('#folkehelse').toggleClass('selected');
        var content = $('.department.folkehelse');

        if (!content.hasClass("visuallyhidden")) {
            content.slideUp('fast', function () {
                content.addClass('visuallyhidden')
                    .slideDown(0);
            });
        } else {
            content.slideUp(0, function () {
                content.removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
    });

    $('#spesialisthelsetjenesten').on('click', function () {
        $('#spesialisthelsetjenesten').toggleClass('selected');
        var content = $('.department.spesialisthelsetjenesten');

        if (!content.hasClass("visuallyhidden")) {
            content.slideUp('fast', function () {
                content.addClass('visuallyhidden')
                    .slideDown(0);
            });
        } else {
            content.slideUp(0, function () {
                content.removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
    });

    $('#ehelseogit').on('click', function () {
        $('#ehelseogit').toggleClass('selected');
        var content = $('.department.ehelseogit');

        if (!content.hasClass("visuallyhidden")) {
            content.slideUp('fast', function () {
                content.addClass('visuallyhidden')
                    .slideDown(0);
            });
        } else {
            content.slideUp(0, function () {
                content.removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
    });

    $('#primaerhelsetjenesten').on('click', function () {
        $('#primaerhelsetjenesten').toggleClass('selected');
        var content = $('.department.primaerhelsetjenesten');

        if (!content.hasClass("visuallyhidden")) {
            content.slideUp('fast', function () {
                content.addClass('visuallyhidden')
                    .slideDown(0);
            });
        } else {
            content.slideUp(0, function () {
                content.removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
    });

    $('#administrasjon').on('click', function () {
        $('#administrasjon').toggleClass('selected');
        var content = $('.department.administrasjon');

        if (!content.hasClass("visuallyhidden")) {
            content.slideUp('fast', function () {
                content.addClass('visuallyhidden')
                    .slideDown(0);
            });
        } else {
            content.slideUp(0, function () {
                content.removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
    });

    $('#helseoekonomiogfinansiering').on('click', function () {
        $('#helseoekonomiogfinansiering').toggleClass('selected');
        var content = $('.department.helseoekonomiogfinansiering');

        if (!content.hasClass("visuallyhidden")) {
            content.slideUp('fast', function () {
                content.addClass('visuallyhidden')
                    .slideDown(0);
            });
        } else {
            content.slideUp(0, function () {
                content.removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
    });
});