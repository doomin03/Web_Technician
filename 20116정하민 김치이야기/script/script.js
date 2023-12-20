$(document).ready(function () {
    $('.menu>li').hover(
        function () {
            // 마우스를 올렸을 때
            $(this).children('ul').stop().slideDown('slow');
        }, function () {
            // 마우스를 뗐을 때
            $(this).children('ul').stop().slideUp('slow');
        }
    );

    let slide = $('.slide>a');
    let now = 0;
    let end = slide.length - 1;
    setInterval(function(){
        
        $(slide[now]).animate({'right':"-100%"}, 1000 ,function(){
            $(this).css('right','100%');
        })
        now++
        if(now>end){
            now = 0;
        }
        $(slide[now]).animate({'right':'0'},1000)
        
    },3000);

    $(".notice a").eq(0).click(function(){
        $('.popup').show();
    })

    $(".close-btn").click(function(){
        $('.popup').hide();
    })
});
