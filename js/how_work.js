$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoWidth: false,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1,
            nav:true
        },
        480:{
            nav:false
        },
        600:{
            items:3,

        },
        1000:{
            items:5,
        }
    }
});
