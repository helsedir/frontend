$(document).ready(function () {
    var clickableBox = $(".js-clickable-box");
    clickableBox.css("cursor", "pointer");
    clickableBox.on('click', function () {
         window.location=$(this).find("a").attr("href");
         return false;
    });
});