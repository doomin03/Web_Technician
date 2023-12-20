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

    let slide = $('.slide>a')
    let now = 0;
    let end = slide.length - 1;
    setInterval(function(){
        
        $(slide[now]).animate({'top':"-100%"}, 1000 ,function(){
            $(this).css('top','100%');
        })
        now++
        if(now>end){
            now = 0;
        }
        $(slide[now]).animate({'top':'0'},1000)
        
    },3000);

    let tabMenu = $('.tab-menu>a')
    $(tabMenu).eq(1).click(function(){
        $(tabMenu).eq(0).css({'background-color':"black",
        "color": "white"})
        $(tabMenu).eq(1).css({'background-color':"white",
        "color": "black"})
        $('.notice').css('z-index', '0');
        $('.gallery').css('z-index', '1');
    })
    $(tabMenu).eq(0).click(function(){
        $(tabMenu).eq(1).css({'background-color':"black",
        "color": "white"})
        $(tabMenu).eq(0).css({'background-color':"white",
        "color": "black"})
        $('.notice').css('z-index', '1');
        $('.gallery').css('z-index', '0');
    })


    $(".notice li").eq(0).click(function(){
        $('.popup').show();
    })

    $(".close-btn").click(function(){
        $('.popup').hide();
    })
});
