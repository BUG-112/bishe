$(function() {

    $(".list li").mouseenter(function() {

        $(this).css({ "background-color": "#F9DA31" }).siblings().css({ "background-color": "#EBEBEB" })
    });
    $(".list li").mouseleave(function() {

        $(this).css({ "background-color": "#EBEBEB" });
    });


    // 导航栏连接行高自适应
    $(window).resize(function() {
        var heights = $(".list li").height();
        $(".list li").css("line-height", heights + "px");

    });
});