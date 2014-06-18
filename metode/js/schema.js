$(function () {
    $('#metodeibrukutfyllendetekst').addClass('visuallyhidden');
    $('#annet_utfyllendetekst').addClass('visuallyhidden');
    $('#straling_utfyllendetekst').addClass('visuallyhidden');
    $('#produsentleverandoertekst').addClass('visuallyhidden');

    $('input:radio[name="metodeibruk"]').change(
    function () {
        if ($(this).val() == 'yes') {
            $('#metodeibrukutfyllendetekst').slideUp(0, function () {
                $('#metodeibrukutfyllendetekst').removeClass('visuallyhidden').slideDown(500);
            });
        }
        else {
            $('#metodeibrukutfyllendetekst').slideUp('fast', function () {
                $('#metodeibrukutfyllendetekst').addClass('visuallyhidden').slideDown(0);
            });
        }
    });

    $('#annet').change(function () {
        if (this.checked) {
            $('#annet_utfyllendetekst').slideUp(0, function () {
                $('#annet_utfyllendetekst').removeClass('visuallyhidden').slideDown(500);
            });
        } else {
            $('#annet_utfyllendetekst').slideUp('fast', function () {
                $('#annet_utfyllendetekst').addClass('visuallyhidden').slideDown(0);
            });
        }
    });

    $('input:radio[name="straaling"]').change(function () {
        if ($(this).val() == 'yes') {
            $('#straling_utfyllendetekst').slideUp(0, function () {
                $('#straling_utfyllendetekst').removeClass('visuallyhidden').slideDown(500);
            });
        } else {
            $('#straling_utfyllendetekst').slideUp('fast', function () {
                $('#straling_utfyllendetekst').addClass('visuallyhidden').slideDown(0);
            });
        }
    });

    $('input:radio[name="produsentleverandoer"]').change(function () {
        if ($(this).val() == 'yes') {
            $('#produsentleverandoertekst').slideUp(0, function () {
                $('#produsentleverandoertekst').removeClass('visuallyhidden').slideDown(500);
            });
        } else {
            $('#produsentleverandoertekst').slideUp('fast', function () {
                $('#produsentleverandoertekst').addClass('visuallyhidden').slideDown(0);
            });
        }
    });
});