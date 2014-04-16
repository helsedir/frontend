$(document).ready(function () {
    $("#header").load("header.html", function () {
        $.getScript('../js/expand.js', function () {
        });
        $.getScript('../js/tabs.js', function () {
        });
    });
    $("#footer").load("footer.html");
});