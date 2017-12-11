$(function(){
    // 请求数据渲染页面
    var myPage=1;
    var myPageSize=5;
    function getData(){
    $.ajax({
        url:"/category/querySecondCategoryPaging",
        data:{
            page:myPage,
            pageSize:myPageSize
        },
        success(backData){
            console.log(backData);
            //导入模板引擎动态渲染页面
            $('#tbodyTmp2').html(template("trTmp2",backData));

            //分页按钮动态生成
            $("#pagintor").bootstrapPaginator({
                bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                currentPage:myPage,//当前页
                totalPages:backData.total,//总页数
                size:"small",//设置控件的大小，mini, small, normal,large
                onPageClicked:function(event, originalEvent, type,page){
                  //为按钮绑定点击事件 page:当前点击的按钮值
                  myPage=page;
                  getData();
                }
              });


        },
        error(xhr){
            Console.log(xhr+"出错啦");
        }
    })
}
getData();





})