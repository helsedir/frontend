$(document).ready(function () {
    //script for hanlding tabs

    $('.tab').addClass('visuallyhidden');
    $('.tab.active').removeClass('visuallyhidden');

    $('.tabs .tab-links a').on('click', function (e) {
        var currentAttrValue = $(this).attr('href');
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).addClass('active');
        $('.tabs ' + currentAttrValue).removeClass('visuallyhidden');
        $('.tabs ' + currentAttrValue).siblings('div').removeClass('active');
        $('.tabs ' + currentAttrValue).siblings('div').addClass('visuallyhidden');

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });

    $('#content_categories_link').on('click', function () {
        document.getElementById('content_categories').focus();
    });

    $('#content_fullist_link').on('click', function () {
        var x = window.scrollX, y = window.scrollY;
        document.getElementById('content_fullist').focus();
        window.scrollTo(x, y);
    });
});