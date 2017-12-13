$(function () {

    //先把key放到搜索栏里面显示

    var key = window.location.search
    key = key.slice(5);
    // console.log(key);
    $('.search-form input').val(key);

    // 先给上架时间等添加点击事件更换升降序图标
    $('.option-list li').on('click', function () {
        var myPrice = 2;
        var mynum = 2;
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).find('span').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
        $(this).siblings('li').find('span').addClass('fa-angle-down');
        $(this).siblings('li').find('span').removeClass('fa-angle-up');
        // console.log($('.option-list li').eq(3));
        if ($('.option-list li').eq(1).find('span').hasClass('fa-angle-up')) {
            myPrice = 1;
        } 
        if ($('.option-list li').eq(2).find('span').hasClass('fa-angle-up')){
            mynum = 1;
        };

        //通过AJax渲染商品页面

        console.log(myPrice);
        console.log(mynum);
        
        var obj = {
            proName: key || "",
            price: myPrice || 2,
            num: mynum || 2,
            page: 1,
            pageSize: 10
        }

        $.ajax({
            url: '/product/queryProduct',
            data: obj,
            success: function (backData) {
                console.log(backData);
                $('.product-list ul').html(template('productTmp',backData));

            },
            error: function (xhr) {
                console.log(xhr + "有问题");
            }
        })



    })


    //点击立刻购买跳转并传ID

    $('.product-list').on("click",'button',function(){
      var id=  $(this).attr('data-id');
        window.location.href='./product.html?id='+id;

    })





})