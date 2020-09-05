jQuery('.slider-wrapper').slick({
    slidesToShow:6,
    slidesToScroll: 6,
    autoplay: false,
    infinite: true,
    dots: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow:3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        } ]
});