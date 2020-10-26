$(document).ready(function(){

    $('#sidebar-switch').click(function(){
        $('#sidebar-switch').toggleClass('open');
        $('.sidebar-left').toggleClass('open');
        $('body').toggleClass('modal-open');
        $('#darker-filter').toggleClass('open');
    });

    $('#darker-filter').click(function(){
        $('#sidebar-switch').toggleClass('open');
        $('.sidebar-left').toggleClass('open');
        $('body').toggleClass('modal-open');
        $('#darker-filter').toggleClass('open');
    });

    $(window).resize(function() {
        var wdth=$(window).width();
        if (wdth > 768) {
            $('#sidebar-switch').removeClass('open');
            $('.sidebar-left').removeClass('open');
            $('body').removeClass('modal-open');
            $('#darker-filter').removeClass('open');
        }
    });


    $('.brands li').click(function(e){
        $(e.currentTarget).toggleClass('active');
    })

});