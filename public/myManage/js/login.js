$(function(){

  

//用户名密码的表单验证
    //使用表单校验插件
$('form').bootstrapValidator({
    //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
    // excluded: [':disabled', ':hidden', ':not(:visible)'],
  
    //2. 指定校验时的图标显示，默认是bootstrap风格
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
  
    //3. 指定校验字段
    fields: {
      //校验用户名，对应name表单的name属性
      username: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          //长度校验
          stringLength: {
            min: 4,
            max: 30,
            message: '用户名长度必须在4到30之间'
          },
          //正则校验
          regexp: {
            regexp: /^[a-zA-Z0-9_\.]+$/,
            message: '用户名由数字字母下划线和.组成'
          },
          callback : {
              message:'用户名不存在'
          }
        }
      },
      password: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          //长度校验
          stringLength: {
            min: 6,
            max: 30,
            message: '用户名长度必须在6到30之间'
          },
          callback : {
            message:'密码错误'
        }
          //正则校验
        //   regexp: {
        //     regexp: /^[a-zA-Z0-9_\.]+$/,
        //     message: '用户名由数字字母下划线和.组成'
        //   }
        }
      },
    }
  
  });






}).on('success.form.bv', function (e) {
    e.preventDefault();
    //使用ajax提交逻辑
    // ajxa验证用户名密码
    NProgress.start();
     
        // console.log("bbbb");
        $.ajax({
            url:'/employee/employeeLogin',
            data:$('form').serialize(),
            type:'post',
            success:function(backData){
                // console.log(backData);

                var validator = $("form").data('bootstrapValidator');  //获取表单校验实例
                if (backData.error==1000){
                    console.log("账号或密码有错误");
                    validator.updateStatus("username", "INVALID", "callback")
                }else if (backData.error==1001) {
                    console.log("密码错误");
                    validator.updateStatus("password", "INVALID", "callback")
                }
                else {
                    window.location.href="http://localhost:3000/myManage/myindex.html";
                }
                setInterval(function(){
                    NProgress.done();

                },2000)
                
            }

        })
   

});

//重置按钮
$('.reset1').on('click',function(){
    console.log("chongzhzi");
    var validator = $("form").data('bootstrapValidator');  //获取表单校验实例
    validator.resetForm();  
})


