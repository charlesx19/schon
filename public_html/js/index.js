$(document).ready(function(){

    showNews();

    function showNews(){
        setTimeout(function(){
            $('#news-letter').addClass('open');
            $('#darker-filter-news-letter').addClass('open');
            $('body').addClass('modal-open');
        }, 1000);
    }

    $('#darker-filter-news-letter').click(function(e){
        $('#news-letter').removeClass('open');
        $('#darker-filter-news-letter').removeClass('open');
        $('body').removeClass('modal-open');
    });

    $('#news-letter .close').click(function(e){
        $(e.currentTarget).closest('#news-letter').removeClass('open');
        $('#darker-filter-news-letter').removeClass('open');
        $('body').removeClass('modal-open');
    });


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