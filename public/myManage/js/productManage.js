$(function(){
    var mypage=1;
    var mypagesize=5;

    //获取数据渲染商品表格
    function getData(){
    $.ajax({
        url:'/product/queryProductDetailList',
        data:{
            page:mypage,
            pageSize:mypagesize,
            
        },
        success(backData){
            console.log(backData);
            $('#tbodyTmp').html(template('trTmp',backData));
            //分页按钮
            $("#pagintor").bootstrapPaginator({
                bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
                currentPage:mypage,//当前页
                totalPages:Math.ceil(backData.total/mypagesize),//总页数
                size:"small",//设置控件的大小，mini, small, normal,large
                onPageClicked:function(event, originalEvent, type,page){
                  //为按钮绑定点击事件 page:当前点击的按钮值
                  mypage=page;
                  getData();
                }
              });
        },
        error(xhr){
            console.log("数据出错"+xhr);
        }


    })
}
getData();



//点击上传图片

$("#fileUpload").fileupload({
    dataType:"json",
    //e：事件对象
    //data：图片上传后的对象，通过e.result.picAddr可以获取上传后的图片地址
    done:function (e, data) {
      console.log(data.result.picAddr);
      //动态吧上传的图片添加在img里面显示
      $('#form1 .form-group:last').append("<img src="+data.result.picAddr+">");  

      console.log(('#form1 .form-group:last img').length);
    }
    
  });
  //超出3张图片不能继续传图
  $("#fileUpload").on("click",function(event){
      console.log($('#ceshiID img').length);
    if ($('#form1 .form-group:last img').length==3){

        event.preventDefault();
     }
  })


  //表单验证
//使用表单校验插件
$("#form1").bootstrapValidator({
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
      proName: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
        }
      },
      oldPrice: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
        }
      },
      price: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
        }
      },
      proDesc: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
        }
      },
      size: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
        }
      },
      num: {
        validators: {
          //不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
        }
      },
    }
  
  });
  //注册表单验证成功事件
  $("#form1").on('success.form.bv', function (e) {
    e.preventDefault();
    //使用ajax提交逻辑
    console.log('表单验证成功啦');
    console.log($('form1').serialize());
    $.ajax({
        url:'/product/addProduct',
        type:'POST',
        data:$('form1').serialize(),
        success:function(backData){
            console.log(backData);
            $('#myModal2').modal('hide');
            getData();
        },
        error:function(xhr){
            console.log(xhr+"书如有问题");
        }

    })


});





})