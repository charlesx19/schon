$(document).ready(function(){

    $('.carousel-featured').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '.featured-button-left',
        nextArrow: '.featured-button-right'
    });
    $('.bestSeller-items').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: '.bestSeller-button-left',
        nextArrow: '.bestSeller-button-right'
    });
    $('.brands-box').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        prevArrow: '.switch-left',
        nextArrow: '.switch-right'
    });
    
});