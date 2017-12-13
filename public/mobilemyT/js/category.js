$(function(){

    //渲染页面
    $.ajax({
        url:'/category/queryTopCategory',
        success:function(backData){
            // console.log(backData);
            $('.content_left  ul.mui-scroll').html(template('leftList',backData))
            $('.content_left li').first().children('a').click();
        }
    })

    //给左侧LI添加点击事件
    $('.content_left  ul.mui-scroll').on('click','a',function(){
        $(this).parent().addClass('active').siblings().removeClass("active");
        //动态渲染右边页面
        // console.log(    $(this).attr('data-id'));

        $.ajax({
            url:"/category/querySecondCategory",
            data: {
                id:$(this).attr('data-id')
            },
            success:function(backData){
                console.log(backData);
                $('.content_right ul.mui-scroll').html(template("rightList",backData));
            }

        })

    })


})