$(document).ready(function () {
    "use strict";
    
    $("#compare_checkbox").on("click", function (e) {
        $("#compare_hiddenfields").toggle("slow", function () {
        });
    });

    $("#compare_hiddenfields select").prop("selectedIndex", -1);
});

