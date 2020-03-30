$(function() {

    var widths = document.documentElement.clientWidth;
    var heights = document.documentElement.clientHeight;
    $("body").css({
        "width": parseInt(widths) + "px",
        "height": parseInt(heights) + "px"
    });
    $(window).resize(function() {

        widths = document.documentElement.clientWidth;
        heights = document.documentElement.clientHeight;
        $("body").css({
            "width": parseInt(widths) + "px",
            "height": parseInt(heights) + "px"
        });
        if (parseInt(widths) <= 750) {
            $("html").css("font-size", "5px");
        } else {
            $("html").css("font-size", "10px");
        }
    });
});