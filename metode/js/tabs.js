$('#tab_header1').keydown(function (ev) {
    if (ev.which == 13) {
        var x = window.scrollX, y = window.scrollY;
        document.getElementById('content_categories').focus();
        window.scrollTo(x, y);
    }
});
$('#tab_header2').keydown(function (ev) {
    if (ev.which == 13) {
        var x = window.scrollX, y = window.scrollY;
        document.getElementById('content_alphabetical').focus();
        window.scrollTo(x, y);
    }
});

$('#tab_footer1').keydown(function (ev) {
    if (ev.which == 13) {
        var x = window.scrollX, y = window.scrollY;
        document.getElementById('footer_content_categories').focus();
        window.scrollTo(x, y);
    }
});
$('#tab_footer2').keydown(function (ev) {
    if (ev.which == 13) {
        var x = window.scrollX, y = window.scrollY;
        document.getElementById('footer_content_alphabetical').focus();
        window.scrollTo(x, y);
    }
});

$("li[role='tab']").click(function () {
    if ($(this).hasClass('tabs_header')) {
        $("li[role='tab'].tabs_header").attr("aria-selected", "false"); //deselect all the tabs
        $(this).attr("aria-selected", "true"); // select this tab
        $(this).blur();
        var tabpanid = $(this).attr("aria-controls"); //find out what tab panel this tab controls
        var tabpan = $("#" + tabpanid);
        $("div[role='tabpanel'].tabpanel_header").attr("aria-hidden", "true"); //hide all the panels
        $("div[role='tabpanel'].tabpanel_header").addClass('visuallyhidden');
        tabpan.attr("aria-hidden", "false"); // show our panel
        tabpan.removeClass('visuallyhidden'); // show our panel
    }
    if ($(this).hasClass('tabs_footer')) {
        $("li[role='tab'].tabs_footer").attr("aria-selected", "false"); //deselect all the tabs
        $(this).attr("aria-selected", "true"); // select this tab
        $(this).blur();
        var tabpanid = $(this).attr("aria-controls"); //find out what tab panel this tab controls
        var tabpan = $("#" + tabpanid);
        $("div[role='tabpanel'].tabpanel_footer").attr("aria-hidden", "true"); //hide all the panels
        $("div[role='tabpanel'].tabpanel_footer").addClass('visuallyhidden');
        tabpan.attr("aria-hidden", "false"); // show our panel
        tabpan.removeClass('visuallyhidden'); // show our panel
    }
});

$("li[role='tab']").keydown(function (ev) {
    if (ev.which == 13) {
        $(this).click();
    }
});

//This adds keyboard function that pressing an arrow left or arrow right from the tabs toggle the tabs.
$("li[role='tab']").keydown(function (ev) {
    if ((ev.which == 39) || (ev.which == 37)) {
        var selected = $(this).attr("aria-selected");
        if (selected == "true") {
            $("li[aria-selected='false']").attr("aria-selected", "true").focus();
            $(this).blur();
            $(this).attr("aria-selected", "false");
            var tabpanid = $("li[aria-selected='true']").attr("aria-controls");
            var tabpan = $("#" + tabpanid);
            $("div[role='tabpanel']").attr("aria-hidden", "true");
            $("div[role='tabpanel']").addClass('visuallyhidden');
            tabpan.attr("aria-hidden", "false");
            tabpan.removeClass('visuallyhidden');
        }
    }
});