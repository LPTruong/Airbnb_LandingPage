$(document).ready(function(){
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        asNavFor: '.thumbnail_slider'
    });
    $('.thumbnail_slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor:'.banner_slider',
        dots: true,
        arrows: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
    
    });
});