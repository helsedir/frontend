//$(function() {
//    $('.klikk-navigasjon > ul').toggleClass('no-js js');
//    $('.klikk-navigasjon .js ul').hide();
//    $('.klikk-navigasjon .js').click(function(e) {
//        $('.klikk-navigasjon .js ul').slideToggle(200);
//        $('.klikker').toggleClass('active');
//        e.stopPropagation();
//    });
//    $(document).click(function() {
//        if ($('.klikk-navigasjon .js ul').is(':visible')) {
//            $('.klikk-navigasjon .js ul', this).slideUp();
//            $('.klikker').removeClass('active');
//        }
//    });
//});

$(function () {
    $('.dropdownmeny > ul').toggleClass('no-js js');
    $('.dropdownmeny .js li').hide();
    $('.menyknapp').click(function (e) {
        $('.dropdownmeny .js li').slideToggle(200);
        $('.menyknapp').toggleClass('active');
        e.stopPropagation();
    });
    $(document).click(function () {
        if ($('.dropdownmeny .js li').is(':visible')) {
            $('.dropdownmeny .js li', this).slideUp();
            $('.menyknapp').removeClass('active');
        }
    });
});

function changeImage() {
    console.log(document.getElementById('menyknapp').src);
    if (document.getElementById('menyknapp').src == '../img/ikon-meny_aapne.png') {
        document.getElementById('menyknapp').src = '../img/ikon-meny_lukke.png';
    } else {
        document.getElementById('menyknapp').src = '../img/ikon-meny_aapne.png';
    }
}

function diffImage(img) {
    if (img.src.match("../img/ikon-meny_aapne.png"))
        img.src = "../img/ikon-meny_lukke.png";
    else
        img.src = "../img/ikon-meny_aapne.png";
}