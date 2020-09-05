$(function(){
    $('.slider-wrapper').slick({
        slidesToShow:1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        prevArrow: $('.tourist-services-slider-left-button'),
        nextArrow: $('.tourist-services-slider-right-button'),
        slideSelector: $('.slider-wrapper-slide')
    });
});
try {
    $('.slider-wrapper').slick('getSlick'); //Кинет исключение если не инициализирован
} catch (e) {
    $('.slider-wrapper').slick();
}
try {
    $('.slider-wrapper').slick('getSlick'); //Если инициализирован
    $('.slider-wrapper').slick('unslick');
} catch (e) {}