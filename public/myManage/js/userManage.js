$(function () {
    // 动态导入用户数据
    var myPageNumber = 1;
    var myPageSize = 5;

    function getUser() {
        $.ajax({
            url: '/user/queryUser',
            data: {
                page: myPageNumber,
                pageSize: myPageSize,
            },
            success: function (backData) {
                console.log(backData);
                //总页数：
                $('#tbodyTmp').html(template('formTmp', backData))
                // 分页插件实现分页

                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: backData.page, //当前页
                    totalPages:Math.ceil(backData.total/myPageSize), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        myPageNumber=page;
                        getUser();
                        
                    }
                });
            },
            error: function (xhr) {
                console.log('数据出错啦' + xhr);
            }
        })
    };
    getUser();

    //点击禁用、启用实现用户状态切换

    $('#tbodyTmp').on('click','button',function(){
        console.log($(this));

        var deleteStatu = $(this).attr('data-isDelete');
        console.log(deleteStatu);
        // if (deleteStatu==0){
        //     $('#tbodyTmp>tr>td>button').html('启用');
        //     $('#tbodyTmp>tr>td>button').removeClass("btn-danger").addClass("btn-primary")
        // }

    })







})