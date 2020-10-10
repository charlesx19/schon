$(document).ready(function(){

    $('.slick-items').slick({
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.angle-left',
        nextArrow: '.angle-right',
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '35px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '25px',
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.slick-items-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.angle-left-mobile',
        nextArrow: '.angle-right-mobile',
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        
    });

});
