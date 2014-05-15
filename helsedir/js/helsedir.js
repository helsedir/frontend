function checkTilskudd() {
    if ($('#gjeldende_tilskudd').is(':checked')) {
        $('#tilskuddsaar').hide(500);
    } else if ($('#utgaatte_tilskudd').is(':checked')) {
        $('#tilskuddsaar').show(500);
        $('#tilskuddsaar').focus();
    }
}