console.log('TEERER');
$('.tourist-services-slider div').click(function(e) {
let text = $(this).find('p').text();
let img = $(this).css('background');
let first_slide_text = $('.tourist-services-slider div:nth-child(1)').find('p').text();
let first_slide_img = $('.tourist-services-slider div:nth-child(1)').css('background');
// Меняем выбранный на первый
$('.tourist-services-slider div:nth-child(1)').find('p').text(text);
$('.tourist-services-slider div:nth-child(1)').css('background', img);
// Меняем первы на выбранный
$(this).find('p', first_slide_text);
$(this).css('background', first_slide_img)
    let slide_info_arr = $('.tourist-services-slider-wrapper div').slice(-5);
for (let i = 0; i <slide_info_arr.length; i++){
    console.log(i);
    slide_info_arr[i].style.display ='none';
    slide_info_arr[$(this).index()].style.display ='block';
}
});
