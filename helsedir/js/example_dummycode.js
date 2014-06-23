$(function () {
    $("#tema").on('change', function () {
        if ($(this).val() == 'Helse- og omsorgstjenester (197)') {
            if ($("#type").val() == "Kommuner (51)") {
                $('.numberofcontributions').text('40 tilskudd du kan søke på innen Helse- og omsorgstjenester for kommuner');
            }
        }
    });

    $("#type").on('change', function () {
        if ($(this).val() == "Kommuner (51)") {
            if ($("#tema").val() == 'Helse- og omsorgstjenester (197)') {
                $('.numberofcontributions').text('40 tilskudd du kan søke på innen Helse- og omsorgstjenester for kommuner');
            }
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
        } else {
            $('.transportsideknapp p').each(function () {
                $(this).text(function () {
                    return $(this).text().replace('Rapporteringsfrist:', 'Søknadsfrist:');
                });
            });
            $('.numberofcontributions').text(function () {
                return $(this).text().replace('30', '40');
            });
        }
    });
});