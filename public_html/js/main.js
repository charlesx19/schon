$(document).ready(function(){

    $('.menu').click(function(){
        $('.hambergerg-area').toggleClass('open');
    });

    $('.shopping-cart').click(function(e){
        $('.cart-panel').toggleClass('open');
        $('#darker-filter-cart').toggleClass('open');
        $('body').toggleClass('modal-open');
    });

    $('.shopping-bag').click(function(e){
        $('.cart-panel').toggleClass('open');
        $('#darker-filter-cart').toggleClass('open');
        $('body').toggleClass('modal-open');
    });

    $('#darker-filter-cart').click(function(e){
        $('.cart-panel').toggleClass('open');
        $('#darker-filter-cart').toggleClass('open');
        $('body').toggleClass('modal-open');
    });

    $('.dropdown-item').click(function(e){
        e.preventDefault();
        var num = $(e.currentTarget).text();
        $('.qty-num').text(num);
    });

    $('.add-to-cart').click(function(e){
        e.preventDefault();
        $(e.currentTarget).toggleClass('quick-bar-red');
    });
    $('.favorite-icon').click(function(e){
        e.preventDefault();
        $(e.currentTarget).toggleClass('quick-bar-red');
        $(e.currentTarget).find('.far').toggleClass('d-none');
        $(e.currentTarget).find('.fas').toggleClass('d-none');
    });
    $('.exchange-icon').click(function(e){
        e.preventDefault();
        $(e.currentTarget).toggleClass('quick-bar-red');
    });
    $('.eye-icon').click(function(e){
        e.preventDefault();
        $(e.currentTarget).toggleClass('quick-bar-red');
    });
    
});