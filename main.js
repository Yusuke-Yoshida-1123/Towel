$(function(){
    $('.list-a').hover(
        function(){
            $('.open').css({'opacity':'1','visibility': 'visible','transform':'translateY(0)'})
        },
        function(){
            $('.open').css({'opacity':'0','visibility':'hidden','transform':'translateY(-20%)'})
        }
    )
    $('.open').hover(
        function(){
            $('.open').css({'opacity':'1','visibility': 'visible','transform':'translateY(0)'})
        },
        function(){
            $('.open').css({'opacity':'0','visibility':'hidden','transform':'translateY(-20%)'})
        }
    )
// ↑　　LISTのhoverで見えるようにする
    $('a[href^="#"').click(function(){
        let href = $(this).attr("href");
        let target = $(href == "#" || href == ""? "html": href);
        let position = target.offset().top;
        $("html,body").animate({ scrollTop: position }, 600, "swing");
        return false;
    })
    // ↑スムーススクロール
    $(".slide-items").slick({
        autoplay:true,
        autoplaySpeed:3000,
        infinite:true,
        // dots:true,
    });
    });