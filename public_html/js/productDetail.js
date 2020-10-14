
$(document).ready(function(){

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '.prev',
        nextArrow: '.next',
    });

    $('.switch-title').on('click', '.title', function(e){
        $(e.currentTarget).siblings().removeClass('active');
        $(e.currentTarget).toggleClass('active');
    });

});