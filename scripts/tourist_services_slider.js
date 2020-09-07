$(function(){
    $('.slider-wrapper').slick({
        slidesToShow:3,
        slidesToScroll: 1,
        rows: 2,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        draggable: true,
        dots: false,
        prevArrow: $('.tourist-services-slider-left-button'),
        nextArrow: $('.tourist-services-slider-right-button'),
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            } ]
    });

});
// $('.tourist-services-slider-buttons img').css('display', 'flex')

