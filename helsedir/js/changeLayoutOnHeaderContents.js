$(document).ready(function () {

    if(!$("#innholdsfortegnelse").length) {
        $("article").addClass("uten-innholdsfortegnelse");
    }

    if(!$("#hovedbilde").length) {
        $("article").addClass("uten-bilde");
    }

});