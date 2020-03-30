$(function() {
    // 购买数量
    $(".red").click(function() {
        var account = $(".account input").val();
        if (account <= 1) {
            $(".account input").val(1);

        } else {
            account--;
            $(".account input").val(account);
        }
    });
    $(".add").click(function() {
        var account = $(".account input").val();
        if (account >= 1000) {
            $(".account input").val(1000);

        } else {
            account++;
            $(".account input").val(account);
        }
    });
    // 立即购买
    $(".buy").click(function() {
        let price = parseInt($('.price').attr('id'))
        let account = parseInt($('.account input').val())

        window.location.href = '/user/buy?number=' + $(this).attr('id') + '&account=' + account + '&total=' + price * account;
    });
    $(".car").click(function() {
        window.location.href = '/user/car';
    });
});