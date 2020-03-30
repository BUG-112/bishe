$(function() {
    // 购买数量
    $(".car-red").click(function() {
        var $input = $(this).siblings("input");
        var account = $input.val();
        if (account <= 1) {
            $input.val(1);

        } else {
            account--;
            $input.val(account);
        }
    });
    $(".car-add").click(function() {
        var $input = $(this).siblings("input");
        var account = $input.val();
        if (account >= 1000) {
            $input.val(1000);

        } else {
            account++;
            $input.val(account);
        }
    });
});