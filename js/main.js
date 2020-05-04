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

// tabs
 const tabs = document.querySelector('.tabs');
 const panels = document.querySelectorAll('.panel');
 const tab = document.querySelector('.tab');

 tabs.addEventListener('click', function(e){
     if(e.target.tagName == "LI"){
         const targetPanel = document.querySelector(e.target.dataset.target);
         panels.forEach(function(panel){
             if(panel == targetPanel){
                 panel.classList.add('p-active');
             }else{
                 panel.classList.remove('p-active');
             }
         })
     }
 });

function toggleItem(elem){
    for(var i = 0; i < elem.length; i++){
        elem[i].addEventListener('click', function(e){
            var current = this;
            for (var i = 0; i < elem.length; i++){
                if(current != elem[i]){
                    elem[i].classList.remove('p-active');
                }else if (current.classList.contains('p-active') === true){
                    current.classList.remove('p-active');
                }else{
                    current.classList.add('p-active');
                }
            }
            e.preventDefault();
        });
    };
}
toggleItem(document.querySelectorAll('.tab'))