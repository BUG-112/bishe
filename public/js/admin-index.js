$(function() {

    var $admin = $(".nav>ul li:last-child");
    $admin.mouseenter(function() {

        $(this).parent().siblings(".admin-list").stop().slideDown();
    });
    $admin.mouseleave(function() {

        $(this).parent().siblings(".admin-list").stop().slideUp();
        $(".admin-list").mouseenter(function() {
            $(this).stop().stop().slideDown();
        });
        $(".admin-list").mouseleave(function() {
            $(this).stop().slideUp();
        });
    });

    var opa_heights = $(".operation").height();
    $(".left-nav").height(opa_heights);

    // 点击菜单按钮隐藏左侧导航栏
    var width_bool = true;
    $(".caidan").click(function() {
        if (width_bool == true) {

            $(".left-nav").width("3%");
            $(".icon").css("font-size", "2.6rem");
            width_bool = false;

            $(".product-list").stop().slideUp();
            $(".product-xiala").children(".icon-icozuola1").removeClass("icon-icozuola1").addClass("icon-icozuola2");
            pro_bool = true;

            $(".order-list").stop().slideUp();
            $(".order-xiala").children(".icon-icozuola1").removeClass("icon-icozuola1").addClass("icon-icozuola2");
            order_bool = true;

            $(".operation").width("96%");
            $(".operation").css("left", "4%");

        } else {

            $(".left-nav").width("12%");
            $(".icon").css("font-size", "1.6rem");
            width_bool = true;

            $(".operation").width("87%");
            $(".operation").css("left", "13%");

        }


    });


    // 点击左侧导航栏隐藏或显示下拉菜单
    var pro_bool = true;
    var order_bool = true;
    $(".product-xiala").click(function() {

        if (pro_bool == true) {
            $(this).siblings(".product-list").stop().slideDown();
            $(this).children(".icon-icozuola2").removeClass("icon-icozuola2").addClass("icon-icozuola1");
            pro_bool = false;

            $(".left-nav").width("12%");
            $(".icon").css("font-size", "1.6rem");
            width_bool = true;

            $(".operation").width("87%");
            $(".operation").css("left", "13%");

        } else {

            $(this).siblings(".product-list").stop().slideUp();
            $(this).children(".icon-icozuola1").removeClass("icon-icozuola1").addClass("icon-icozuola2");
            pro_bool = true;
        }

    });
    $(".order-xiala").click(function() {

        if (order_bool == true) {
            $(this).siblings(".order-list").stop().slideDown(200);
            $(this).children(".icon-icozuola2").removeClass("icon-icozuola2").addClass("icon-icozuola1");
            order_bool = false;

            $(".left-nav").width("12%");
            $(".icon").css("font-size", "1.6rem");
            width_bool = true;

            $(".operation").width("87%");
            $(".operation").css("left", "13%");

        } else {

            $(this).siblings(".order-list").stop().slideUp(200);
            $(this).children(".icon-icozuola1").removeClass("icon-icozuola1").addClass("icon-icozuola2");
            order_bool = true;

        }
    });

    // 查看商品
    $(".product-list>li").eq(0).click(function() {

        window.location.href = '/admin/product-list';

    });

    // 订单查看
    $(".order-list>li").eq(0).click(function() {

        window.location.href = '/admin/order-list';

    });

    $('.proAdd').on('click', function() {

            window.location.href = '/admin/product-add'
        })
        // 退出登录
    $('.logout').on('click', function() {

        window.location.href = '/admin/logout'
    });
});