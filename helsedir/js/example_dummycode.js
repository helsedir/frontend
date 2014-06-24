$(function () {
    $("#tema").on('change', function () {
        var tema = $(this).val().replace(/\d+/g, '').replace(/\(|\)/g, '');
        if (tema == 'Alle tema') {
            $('#sort_tema').text('');
        } else {
            if ($("#type").val() != "Alle") {
                $('#sort_type').text('for ' + $("#type").val().replace(/\d+/g, '').replace(/\(|\)/g, '').toUpperCase());
            }
            $('#sort_tema').text(' innen ' + tema.toUpperCase());
        }
    });

    $("#type").on('change', function () {
        var type = $(this).val().replace(/\d+/g, '').replace(/\(|\)/g, '');
        if (type == 'Alle') {
            $('#sort_type').text('');
        }
        else if ($("#tema").val() != "Alle tema") {
            $('#sort_type').text(' for ' + type.toUpperCase());
        }
        else {
            $('#sort_type').text(' for ' + type.toUpperCase());
        }
    });

    $('input:radio[name="radiobutton"]').change(function () {
        if ($(this).val() == 'rapportere') {
            $('.transportsideknapp p').each(function () {
                $(this).text(function () {
                    return $(this).text().replace('Søknadsfrist:', 'Rapporteringsfrist:');
                });
            });

            $('.numberofcontributions').text(function () {
                return $(this).text().replace('40', '30');
            });
            $('.numberofcontributions').text(function () {
                return $(this).text().replace('søke', 'rapportere');
            });
        } else {
            $('.transportsideknapp p').each(function () {
                $(this).text(function () {
                    return $(this).text().replace('Rapporteringsfrist:', 'Søknadsfrist:');
                });
            });
            $('.numberofcontributions').text(function () {
                return $(this).text().replace('30', '40');
            });
            $('.numberofcontributions').text(function () {
                return $(this).text().replace('rapportere', 'søke');
            });
        }
    });
});