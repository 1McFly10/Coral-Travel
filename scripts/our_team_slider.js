$(function(){
    $('.our-team-slider').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        dots: false,
        draggable: true,
        prevArrow: $('.our-team-slider-left-button'),
        nextArrow: $('.our-team-slider-right-button'),
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