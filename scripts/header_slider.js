backgrounds_array = ['images/header_slider/window_1.png','images/header_slider/window_2.jpg', 'images/header_slider/window_4.jpg', 'images/header_slider/window_5.jpg'];
// slider_button_array = ['slider-button-1','slider-button-2','slider-button-3','slider-button-4']
function Rotator_cont() {

    var s = 5000;  // Время отображения

    var N= backgrounds_array.length;

    // var i=Math.round(Math.random()*(N));
    var i =-1;
    Rotator(i);

    function Rotator(i){
        i++; if( i > N - 1){i=0};//alert(i);
        $('.banner_wrapper').css('background-image', 'url('+ backgrounds_array[i] +')');
        timerId01=setTimeout(function(){Rotator(i)},s);return;}
}
Rotator_cont()