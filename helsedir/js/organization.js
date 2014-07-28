$(function () {
    $('.person, .person_sub, .person_subsub, .subsub-divisions').each(function () {
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
        $('.sub-division, .etater', department).each(function () {
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

    $('.sub-division').on('click', function (e) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;

        if ($(this).children('.box').hasClass('selected')) {
            $(this).children('.box').removeClass('selected');

            $(this).children('.person_sub, .subsub-divisions, .decorativeborder').slideUp('fast', function () {
                $(this).addClass('visuallyhidden')
                    .slideDown(0);
            });
        } else {
            $(this).siblings('.sub-division').children('.box').each(function () {
                $(this).removeClass('selected');
            });

            $(this).siblings('.sub-division').children('.person_sub, .subsub-divisions, .decorativeborder').each(function () {
                $(this).slideUp('fast', function () {
                    $(this).addClass('visuallyhidden')
                        .slideDown(0);
                });
            });

            $(this).children('.box').addClass('selected');
            $(this).children('.person_sub, .subsub-divisions, .decorativeborder').slideUp(0, function () {
                $(this).removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
    });

    $('.subsub-division').on('click', function (e) {
        e.stopPropagation();
        if ($(this).children('.box').hasClass('selected')) {
            $(this).children('.box').removeClass('selected');

            $(this).children('.person_subsub').slideUp('fast', function () {
                $(this).addClass('visuallyhidden')
                    .slideDown(0);
            });
        }
        else {
            $(this).siblings('.subsub-division').children('.box').each(function () {
                $(this).removeClass('selected');
            });

            $(this).siblings('.subsub-division').children('.person_subsub').each(function () {
                $(this).slideUp('fast', function () {
                    $(this).addClass('visuallyhidden')
                        .slideDown(0);
                });
            });

            $(this).children('.box').addClass('selected');
            $(this).children('.person_subsub').slideUp(0, function () {
                $(this).removeClass('visuallyhidden')
                    .slideDown(500);
            });
        }
    });

    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    /*$(window).resize(function () {
        var windowWidthBefore = $(window).width();
        waitForFinalEvent(function () {
            var windowWidth = $(window).width();

            console.log("old " + windowWidthBefore + " new " + windowWidth);

            if (windowWidth <= 1199 && windowWidthBefore >= 1200) {
                $(".sub-division, .etater, .person").each(function () {
                    $(this).addClass('visuallyhidden');
                });
            }
            else {
                if (windowWidth <= 1199 && windowWidthBefore <= 1199) {
                } else {
                    $(".sub-division, .etater, .person ").each(function () {
                        $(this).removeClass('visuallyhidden');
                    });
                }
            }
        }, 500, "some unique string");
    });*/

    $(window).on('load resize', function () {
        var windowWidth = $(window).width();

        if (windowWidth <= 1199) {
            $(".sub-division, .etater, .person, .person_sub, .person_subsub").each(function () {
                $(this).addClass('visuallyhidden');
            });

            $(".division_header.selected, .box.selected").each(function () {
                $(this).removeClass('selected');
            });
        } else {
            $(".sub-division, .etater ").each(function () {
                $(this).removeClass('visuallyhidden');
            });
        }
    });
});