$(document).ready(function () {
    $('.tab').addClass('visuallyhidden');
    $('.tab.active').removeClass('visuallyhidden');

    $('.tabs .tab-links a').on('click', function (e) {
        var currentAttrValue = $(this).attr('href');
        console.log(currentAttrValue);
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).addClass('active').removeClass('visuallyhidden').siblings('div').removeClass('active').addClass('visuallyhidden');

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });

    $('#content_categories_link').on('click', function () {
        document.getElementById('content_categories').focus();
    });

    $('#content_fullist_link').on('click', function () {
        document.getElementById('content_fullist').focus();
    });
});