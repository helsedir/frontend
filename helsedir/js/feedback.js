$(document).ready(function () {
    var feedbackForm = $(".feedback #etterletet");

    feedbackForm.hide();

    $(".feedback :radio").on("click", function() {
        feedbackForm.show();
    });
});