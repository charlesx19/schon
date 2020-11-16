$(document).ready(function(){

    $(window).resize(function() {
        var wdth=$(window).width();
        if (wdth < 768) {
            $('.products-menu').removeClass('open');
            $('.menu-big').removeClass('open');
            $('#darker-filter-products').removeClass('open');
            $('body').removeClass('modal-open');
        }
    });

    $('.products-menu').click(function(e){
        var wdth = $(window).width();
        if (wdth > 768) {
            $('.products-menu').addClass('open');
            $('.menu-big').addClass('open');
            $('#darker-filter-products').addClass('open');
            $('body').addClass('modal-open');
        } else {
            window.location.href = "productList.html";
        }
    });


    $('#darker-filter-products').click(function(e){
        $('.products-menu').removeClass('open');
        $('.menu-big').removeClass('open');
        $('#darker-filter-products').removeClass('open');
        $('body').removeClass('modal-open');
    });

    $('.search').click(function(e){
        $('#search-modal').toggleClass('open');
    });

    $('#search-modal .close-icon').click(function(e){
        $('#search-modal').toggleClass('open');
    });

    $('.hambergerg').click(function(e){
        $('#nav').toggleClass('open');
    });

    $('.shopping-cart').click(function(e){
        $('.cart-panel').toggleClass('open');
        $('.cart-panel-mobile').toggleClass('open');
        $('#darker-filter-cart').toggleClass('open');
        $('body').toggleClass('modal-open');
    });

    $('.shopping-bag').click(function(e){
        $('.cart-panel').toggleClass('open');
        $('.cart-panel-mobile').toggleClass('open');
        $('#darker-filter-cart').toggleClass('open');
        $('body').toggleClass('modal-open');
    });

    $('.cart-panel').on('click', '.close', function(e){
        $(e.currentTarget).closest('a.product-box').fadeOut();
    });

    $('.cart-panel-mobile').on('click', '.close', function(e){
        $(e.currentTarget).closest('a.product-box').fadeOut();
    });

    $('#darker-filter-cart').click(function(e){
        $('.cart-panel').toggleClass('open');
        $('.cart-panel-mobile').toggleClass('open');
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