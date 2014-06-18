$(function () {
    $('#metodeibrukutfyllendetekst').addClass('visuallyhidden');

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
});