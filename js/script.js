$(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        infinite:true,
        speed:2000
    });

    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// lightGallery(document.getElementById('anchor-tag'));

lightGallery(document.getElementById('anchor-tag'), {
    plugins: [lgZoom, lgThumbnail]
});



