
$(document).ready(function(){

    $('.order-products-area').on('click', '.close-icon', function(e){
        $(e.currentTarget).closest('.product-row').fadeOut();
    });

});