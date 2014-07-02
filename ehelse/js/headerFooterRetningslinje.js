$(document).ready(function () {
    $("#header").load("http://helsedir.azurewebsites.net/layouts/header.html", function () {
        $.getScript('http://helsedir.azurewebsites.net/js/expandmenu.js', function () {
        });
        $.getScript('http://helsedir.azurewebsites.net/js/tabs.js', function () {
        });
    });
    $("#footer").load("http://helsedir.azurewebsites.net/layouts/footer.html");
});