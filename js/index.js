/* MAIN slide*/
$(document).ready(function () {
    $('.main_bg').slick({
        dots: true,
        infinite: true,
        arrows: false,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
    });
})

/* BEST ART */
$('.best_list').slick({
    infinite: false,
    arrows: true,
    dots: true,
    slidesToShow: 4,
    cssEase: 'linear',
    slidesToScroll: 1
});
/* NEW ART */
$('.new_list').slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    cssEase: 'linear',
    slidesToScroll: 2
});
/* REVIEWT */
$('.review_list').slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 3,
    cssEase: 'linear',
    slidesToScroll: 1
});

/* MD PICK */
$(function () {
    let tab = $('.pick_tap li')
    tab.on('click', function () {
        let idx = $(this).index()
        let tab_cont = $(this).parents('.pick_tap').siblings('.tab_content').eq(idx);
        $(this).addClass('on');
        $(this).siblings().removeClass('on')
        tab_cont.addClass('on')
        tab_cont.siblings().removeClass('on')
    })
})


/* totalNav */

    $(function() {
        $('.btnNav').on('click', function() {
            $('.totalNav').slideDown('on')
        })
    })
    $(function() {
        $('.close').on('click', function() {
            $('.totalNav').slideUp('on')
        })
    })
