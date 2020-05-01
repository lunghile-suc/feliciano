$(document).ready(function () {
    // carousel
    $('.carousel-content').slick({
        dots: false,
        fade: true,
        infinite: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // nav toggle
    $('.burger').click(function(){
        $('ul').slideToggle('active');
    });

    // nav scrolled
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop()>0);
        $('ul').toggleClass('scrolled', $(this).scrollTop()>0);
    });

    // timepicker
    $('#timepicker').timepicker();

    $('#datepicker').datetimepicker({
        timepicker: false,
        mask:true,
    });
});