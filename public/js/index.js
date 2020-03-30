$(function() {


    var heights = document.documentElement.clientHeight;
    $("#lunbo").height(parseInt(heights) * 0.693);

    $(window).resize(function() {
        // 轮播图

        heights = document.documentElement.clientHeight;
        $("#lunbo").height(parseInt(heights) * 0.693);

    });
    var count = 0;
    $("#lunbo .right-arrow").click(function() {

        count++;
        if (count === $("#lunbo li").length) {
            count = 0;
        }
        $("#lunbo li").eq(count).stop().fadeIn().siblings("li").stop().fadeOut();

    });
    $("#lunbo .left-arrow").click(function() {
        count--;
        if (count < 0) {
            count = $("#lunbo li").length - 1;
        }
        $("#lunbo li").eq(count).stop().fadeIn().siblings("li").stop().fadeOut();
    });

    $(".swiper .left-arrow").click(function() {

        $(".swiper li").css({ "transform": "translate(-270px)" });
    });
    $(".swiper .right-arrow").click(function() {

        $(".swiper li").css({ "transform": "translate(0)" });
    });

    $(".swiper li img, .product img").click(function() {

        let id = $(this).parent().attr('id')

        window.location.href = '/index/product?name=' + id

    });
    // 商品购买
    $(".product span button").click(function() {

        window.location.href = "/user/buy";
    });
});