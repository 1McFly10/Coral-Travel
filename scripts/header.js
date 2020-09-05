$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    $('.menu-btn').css("display","none");
    $('.left_sidebar').css('overflowX','hidden')
})
$('.cancel-btn').on('click', function(e) {
    e.preventDefault();
    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    $('.left_sidebar').css('overflowX','inherit')
    setTimeout(()=>{
        $('.menu-btn').css("display","flex");
    }, 280)
});

$('.codrops-demos_sidebar a').on('click', (e)=>{
    e.preventDefault();
    $('.left_sidebar').toggleClass('menu_active');
    $('.main_content').toggleClass('content_active');
    setTimeout(()=>{
        $('.menu-btn').css("display","flex");
    }, 280)
})