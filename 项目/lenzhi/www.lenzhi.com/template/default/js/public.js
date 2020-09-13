$(document).ready(function(){
    $(".touch-toggle a").click(function(event){

        var className = $(this).attr("data-drawer");

        if( $("."+className).css('display') == 'none' ){

            $("."+className).slideDown().siblings(".drawer-section").slideUp();
            $(".touch_bg").slideDown();//20170419
            $(".touch-top").addClass("bgs1");
        }else{

            $(".drawer-section").slideUp();
            $(".touch_bg").slideUp();//20170419
            $(".touch-top").removeClass("bgs1");

        }
        event.stopPropagation();

    });

    $(".touch_bg").click(function(){
        $(".drawer-section").slideUp();
        $(".touch_bg").slideUp();//20170419
    })
    $(".closetitle").click(function(){
        $(".drawer-section").slideUp();
        $(".touch_bg").slideUp();//20170419
    })

    //$(document).click(function(){
//
//      $(".drawer-section").slideUp();   
//	  
//     })

    $('.touch-menu a').click(function(){

        if( $(this).next().is('ul') ){

            if( $(this).next('ul').css('display') == 'none' ){
                $('.touch-menu ul li').find("ul").slideUp();
                $('.touch-menu ul li').find("a").find('i').attr("class","touch-arrow-down");
                $(this).next('ul').slideDown();

                $(this).find('i').attr("class","touch-arrow-up");
                //$(".touch-top").css("position","absolute");
            }else{

                $(this).next('ul').slideUp();

                $(this).next('ul').find('ul').slideUp();

                $(this).find('i').attr("class","touch-arrow-down");
                //$(".touch-top").css("position","fixed");

            }

        }

    });


});



// 导航显示与隐藏
var NavHeight = false;
if($("#about_a").length > 0)
{
var hh=$("#about_a").offset().top;//关于我们
var hh2=$("#about_a").height();
}
$(window).scroll(function(){
    Nav();
    if($("#about_a").length > 0)//关于我们
    {

        if($(window).scrollTop()>hh){
            //$('#about_txt').css("margin-top","217px");
            $('.about_pos').addClass("pos");
            $('#about_a').css("margin-top","1%");
            if($(window).scrollTop()>=$("#a2").offset().top-hh2&&$(window).scrollTop()<$("#a3").offset().top-hh2)
            {
                $("#about_a a").removeClass("isel");
                $("#m2_c").addClass("isel");
            }
            else if($(window).scrollTop()>=$("#a3").offset().top-hh2&&$(window).scrollTop()<$("#a4").offset().top-hh2)
            {
                $("#about_a a").removeClass("isel");
                $("#m3_c").addClass("isel");
            }
            else if($(window).scrollTop()>=$("#a4").offset().top-hh2)
            {
                $("#about_a a").removeClass("isel");
                $("#m4_c").addClass("isel");
            }
            else
            {
                $("#about_a a").removeClass("isel");
                $("#m1_c").addClass("isel");
            }

        }else{
            $(".about_pos").removeClass("pos");
            $('#about_a').css("margin-top","3%");
            $("#about_a a").removeClass("isel");
            $("#m1_c").addClass("isel");
        }
    }


})
Nav();
function Nav(){
    if( $(window).scrollTop() > 250 && NavHeight == false ){
        $("body").addClass("nav-hide");
        NavHeight = true;
    }else if($(window).scrollTop() <= 250 && NavHeight == true ){
        NavHeight = false;
        $("body").removeClass("nav-hide");
    }
}
$(window).mousewheel(function(e, delta) { //滚动条向上滚动
    p = $(window).scrollTop();
    if( p > $(window).height() ){
        if (delta < 0) {
            $("body").addClass("nav-hide");
        } else { //上滚
            $("body").removeClass("nav-hide");
        }
    }
})
