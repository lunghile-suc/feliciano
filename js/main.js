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

//testimonials carousel
$('.testimonials-items').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
    slidesToShow: 3,
    slideToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slideToScroll: 3,
                dots: true,
                infinite: true
            }
        },
        {
            breakpoint: 780,
            settings: {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slideToScroll: 1
            }
        }
    ]
});