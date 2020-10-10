
$(document).ready(function(){

    $('#sidebar-switch').click(function(){
        $('#sidebar-switch').toggleClass('open');
        $('.sidebar-full').toggleClass('open');
        $('#darker-filter').toggleClass('open');
    });

    $('.close').click(function(){
        $('#sidebar-switch').toggleClass('open');
        $('.sidebar-full').toggleClass('open');
        $('#darker-filter').toggleClass('open');
    });
   

});