$(function(){
    //检验是否处于已登录状态
    function isLogin(){
    $.ajax({
        url:'/employee/checkRootLogin',
        success:function(backData){
            // console.log(backData);
            // console.log('登陆了吗');
            if (backData.error){
                window.location.href = "./login.html";
              }
        },
        error:function(xhr){
            console.log("出错了"+xhr);

        }
    })
};
isLogin();

        // 按按钮实现分类管理折叠展开

        $('#classifyFoldBtn').on('click',function(){
            $('#classifyFoldContent').slideToggle();

        })

        //登出后点击确定，移除登录状态并跳转首页。
        $('.logoutBtn').on('click',function(){
            $('#myModal').modal('show');
            $('#myModal .modal-footer button.btn-danger').on('click',function(){
                $.ajax({
                    url:'/employee/employeeLogout',
                    success:function(backData){
                        // console.log(backData);
                        $('#myModal').modal('hide');
                        window.location.href='./login.html';
                        isLogin();
                    },
                    error:function(xhr){
                        console.log('输入的有错误'+xhr);  
                    }
                })
               
            })
        })

})