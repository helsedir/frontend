$(document).ready(function () {
    $("#header").load("http://helsedir.azurewebsites.net/layouts/header.html", function () {
        $.getScript('http://helsedir.azurewebsites.net/js/expand.js', function () {
        });
        $.getScript('http://helsedir.azurewebsites.net/js/tabs.js', function () {
        });
    });
    $("#footer").load("http://helsedir.azurewebsites.net/layouts/footer.html");
});