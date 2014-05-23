$(function () {
    $(".accordion").each(function () {
        $sectionheader = $(this);
        $sectioncontent = $sectionheader.next();
        $headerparent = $sectionheader.parent();
        $sectioncontent.addClass('hide');
        $headerparent.addClass('has-hidden-content');
    });
});

/*
$(".accordion").click(function () {
    $sectionheader = $(this);
    $sectioncontent = $sectionheader.next();
    $headerparent = $sectionheader.parent();
    $sectioncontent.toggleClass('visuallyhidden');
    if ($headerparent.hasClass("has-hidden-content")) {
        $headerparent.addClass("has-visible-content");
        $headerparent.removeClass("has-hidden-content");
        $sectioncontent.slideDown(300);
        $('html, body').animate({
            scrollTop: $sectionheader.offset().top
        }, 500);
    } else {
        $headerparent.removeClass("has-visible-content");
        $headerparent.addClass("has-hidden-content");
        $sectioncontent.slideUp(500);
    }
});*/

$(".accordion").click(function () {
    $sectionheader = $(this);
    $sectioncontent = $sectionheader.next();
    $headerparent = $sectionheader.parent();
    if ($headerparent.hasClass("has-hidden-content")) {
        $headerparent.addClass("has-visible-content");
        $headerparent.removeClass("has-hidden-content");
        $sectioncontent.slideUp(0, function () {
            $sectioncontent.removeClass('hide')
                .slideDown(500);
        });
        $('html, body').animate({
            scrollTop: $sectioncontent.offset().top
        }, 700);
    } else {
        $headerparent.removeClass("has-visible-content");
        $headerparent.addClass("has-hidden-content");
        $sectioncontent.slideUp('fast', function () {
            $sectioncontent.addClass('hide')
                .slideDown(0);
        });
    }
});

function checkTilskudd() {
    if ($('#gjeldende_tilskudd').is(':checked')) {
        $('#tilskuddsaar').hide(500);
    } else if ($('#utgaatte_tilskudd').is(':checked')) {
        $('#tilskuddsaar').show(500);
        $('#tilskuddsaar').focus();
    }
}