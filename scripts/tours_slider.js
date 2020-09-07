$(document).ready(()=>{
$(window).resize(()=> { if(window.innerWidth>=768){
    location.reload()
    $(window).off('resize', onresize);
}
});
slider();
function slider() {
    if (window.innerWidth >= 768) {
        console.log(document.documentElement.clientWidth + ' > 768px');
        $('.tourist-services-slider div').click(function (e) {
            let text = $(this).find('p').text();
            let img = $(this).css('background');
            let first_slide_text = $('.tourist-services-slider div:nth-child(1)').find('p').text();
            let first_slide_img = $('.tourist-services-slider div:nth-child(1)').css('background');
// Меняем выбранный на первый
            $('.tourist-services-slider div:nth-child(1)').find('p').text(text);
            $('.tourist-services-slider div:nth-child(1)').css('background', img);
// Меняем первы на выбранный
            $(this).find('p').text(first_slide_text);
            console.log(first_slide_text);
            $(this).css('background', first_slide_img)
            let slide_info_arr = $('.tourist-services-slider-wrapper div').slice(-5);
            for (let i = 0; i < slide_info_arr.length; i++) {
                console.log(i);
                slide_info_arr[i].style.display = 'none';
                slide_info_arr[$(this).index()].style.display = 'block';
            }
        });
    }
    if (window.innerWidth <= 768) {
        $('.services-slider-blue-underline').remove();
        console.log(document.documentElement.clientWidth + ' < 768');

        $('.tourist-services-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            // infinite: true,
            draggable: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]

        });
        $('.slider-info-wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            // infinite: true,
            draggable: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]

        });
    }
}
})





