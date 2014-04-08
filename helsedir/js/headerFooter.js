$(document).ready(function() {
    $("#header").load("header.html", function() {
        $("#tabs").tabs();
        $("#statistikk").tabs();
        $.getScript('../js/expand.js', function () {
        });
    });
    $("#footer").load("footer.html");
});