$(document).ready(function () {
    $("#header").load("http://helsedir.azurewebsites.net/layouts/header.html", function () {
        $.getScript('../js/expand.js', function () {
        });
        $.getScript('../js/tabs.js', function () {
        });
    });
    $("#footer").load("http://helsedir.azurewebsites.net/layouts/footer.html");
});