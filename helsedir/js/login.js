$(document).ready(function () {

    $("#innloggingslenke a, #profillenke a").on("click", function(e) {
        e.preventDefault();
        $(this).closest("body").toggleClass("innlogget");
    });

    $("#notifikasjoner a").on("click", function(e) {
        e.preventDefault();
    });

});