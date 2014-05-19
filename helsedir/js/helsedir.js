$(function () {
    $(".accordion").each(function () {
        $sectionheader = $(this);
        $sectioncontent = $sectionheader.next();
        $headerparent = $sectionheader.parent();
        $sectioncontent.addClass('visuallyhidden');
        $headerparent.addClass('has-hidden-content');
    });
});

$(".accordion").click(function () {
    $sectionheader = $(this);
    $sectioncontent = $sectionheader.next();
    $headerparent = $sectionheader.parent();
    $sectioncontent.toggleClass('visuallyhidden');
    if ($headerparent.hasClass("has-hidden-content")) {
        $headerparent.addClass("has-visible-content");
        $headerparent.removeClass("has-hidden-content");
    } else {
        $headerparent.removeClass("has-visible-content");
        $headerparent.addClass("has-hidden-content");
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