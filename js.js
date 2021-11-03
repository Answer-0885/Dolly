$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });
});

$(document).ready(function() {
    $('.menu-burger__header').click(function(event){
        $('.menu-burger__header, .header__menu').toggleClass('active');
        $('body').toggleClass('fixed-page');
    });
});