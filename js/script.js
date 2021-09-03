$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        infinite:true,
        speed:2000
    });

    // $("[data-scroll]").on("click", function(event) {
    //     event.preventDefault();

    //     let scrollEl = $(this).data("scroll")
    //     let scrollElPos = $(scrollEl).offset().top;

    //     console.log(scrollElPos);

    //     $("html, body").animate({
    //         scrollTop: scrollElPos
    //     }, 500)
    // });
});

lightGallery(document.getElementById('anchor-tag'), {
    // plugins: [lgZoom, lgThumbnail]
});



