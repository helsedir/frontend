$(document).ready(function () {
    $("#header").load("header.html", function () {
        $.getScript('../js/expandmenu.js', function () {
        });
        $.getScript('../js/modernizr-latest.js', function () {
        });
        $.getScript('../js/respond.js', function () {
        });
        $.getScript('../js/tabs.js', function () {
        });
    });
    $("#footer").load("footer.html", function () {
    });
});