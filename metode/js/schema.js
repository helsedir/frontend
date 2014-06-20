$(function () {
    $('#metodeibrukutfyllendetekst').addClass('visuallyhidden');
    $('#annet_utfyllendetekst').addClass('visuallyhidden');
    $('#straling_utfyllendetekst').addClass('visuallyhidden');
    $('#produsentleverandoertekst').addClass('visuallyhidden');
    $('#step2').addClass('visuallyhidden');
    $('#step3').addClass('visuallyhidden');

    $('input:radio[name="metodeibruk"]').change(
        function () {
            if ($(this).val() == 'yes') {
                $('#metodeibrukutfyllendetekst').slideUp(0, function () {
                    $('#metodeibrukutfyllendetekst').removeClass('visuallyhidden').slideDown(500);
                });
            } else {
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

    $('.gotostep1').click(function () {
        $('#step1').removeClass('visuallyhidden');
        $('#step2').addClass('visuallyhidden');
        $('#step3').addClass('visuallyhidden');
    });

    $('.gotostep2').click(function () {
        $('#step2').removeClass('visuallyhidden');
        $('#step1').addClass('visuallyhidden');
        $('#step3').addClass('visuallyhidden');
    });

    $('.gotostep3').click(function () {
        $('#step3').removeClass('visuallyhidden');
        $('#step2').addClass('visuallyhidden');
        $('#step1').addClass('visuallyhidden');
    });

    $('#aksept').change(function () {
        if (this.checked) {
            $('#formsubmit').prop("disabled", false);
            $('#formsubmit').removeClass('disabled');
        } else {
            $('#formsubmit').prop("disabled", true);
            $('#formsubmit').addClass('disabled');
        }
    });
});