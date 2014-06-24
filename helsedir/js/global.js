$('#txtSearch').on('focus', function () {
    $(this).animate({
        width: '100%'
    }, 500, function() {
    });
});

$('#txtSearch').on('focusout', function() {
    $(this).animate({
        width: '1px'
    }, 500);
});