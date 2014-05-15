$(document).ready(function () {
    $("#header").load("header.html", function () {
        $.getScript('../js/expand.js', function () {
        });
        $.getScript('../js/tabs.js', function () {
        });
        $.getScript('../js/respond.js', function () {
        });
    });
    $("#footer").load("footer.html");
});