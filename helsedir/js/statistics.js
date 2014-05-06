$(document).ready(function () {
    "use strict";

  

    var hiddenFields = $("#compare_hiddenfields");

    $("#compare_checkbox").on("click", function (e) {
        e.preventDefault();

        hiddenFields.style.display =  'block';
    });

});