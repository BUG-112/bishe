$(function() {

    $(".addressed input").mouseenter(function() {
        var check = $(this).prop("checked");

        $(this).click(function() {
            if (check == false) {
                $(this).prop("checked", true);
                check = true;
            } else {
                $(this).prop("checked", false);
                check = false;
            }

        });
    });


    // 添加收货地址
    $('.address-add').on('click', function() {

        $('.addrForm').stop().fadeIn()

    })
    $(".addrForm").on("submit", function() {
        event.preventDefault();
        let addrData = $(this).serialize();
        $.ajax({
            url: "/user/addr-save",
            type: "POST",
            data: addrData,
            dataType: "json",
            success: function(data) {

                let errCode = data.errCode;
                let message = data.message;
                if (errCode == 0) {

                    window.alert(message)
                    window.location.href = "/user/user-address "
                } else {

                    window.alert(message)
                    window.location.href = "/user/user-address "
                }
            }
        })

    })

    // 取消地址添加
    $('.cancel').on('click', function() {

        $('.addrForm').stop().fadeOut()
    })

    // 设置默认地址
    $('.addressed>input').on('click', function() {

        if ($(this).prop('checked') == true) {
            var index = $(this).attr('id')

            $('.addr-default').on('click', function() {

                $.ajax({

                    url: '/user/addr-default?index=' + index,
                    type: 'GET',
                    dataType: 'json',
                    success: function(data) {

                        if (data.errCode === 0) {

                            window.alert(data.message)
                            window.location.href = '/user/user-address'
                        } else {

                            window.alert(data.message)
                            window.location.href = '/user/user-address'
                        }
                    }
                })

            })
        }

    })

    //删除地址

    $('.addr-del').on('click', function() {

        let index = $(this).attr('id')
        $.ajax({

            url: '/user/addr-del?index=' + index,
            type: 'GET',
            dataType: 'json',
            success: data => {

                if (data.errCode == 0) {
                    window.alert(data.message)
                    window.location.href = '/user/user-address'
                } else {

                    window.alert(data.message)
                    window.location.href = '/user/user-address'
                }
            }
        })
    })


    // 查看编辑

    $('.addr-editor').on('click', function() {

        let idx = $(this).attr('id')

        window.location.href = '/user/addr-editor?idx=' + idx
    })

});