
$(document).ready(function(){

    $('#sidebar-switch').click(function(){
        $('body').toggleClass('modal-open');
        $('#sidebar-switch').toggleClass('open');
        $('.sidebar-full').toggleClass('open');
        $('#darker-filter').toggleClass('whiter');
        $('#darker-filter').toggleClass('open');
    });

    $('.sidebar-area .close').click(function(){
        $('body').toggleClass('modal-open');
        $('#sidebar-switch').toggleClass('open');
        $('.sidebar-full').toggleClass('open');
        $('#darker-filter').toggleClass('whiter');
        $('#darker-filter').toggleClass('open');
    });
   
});