$(function () {






    //拿到历史搜索数据
    function getHistory() {
        var history = window.localStorage.getItem('historySearch');
        if (history == null) {
            history = [];
        } else {
            history = JSON.parse(history);
        }
        return history;
    }

    console.log(history);
    // 已进入页面就渲染数据


    function renderPage() {
        var history = getHistory();
        $('.history-list ul').html(template("historyListTmp", history));
    }
    renderPage();


    //点击搜索保存到LOCALHOUST


    $(".search-form button").on("click", function (event) {
       

        event.preventDefault();
        // 拿到输入的值
        var searchVal = $(this).prev().val();

        window.location.href='./searchList.html?key='+searchVal;
        // console.log(searchVal);
        // if ()
        //获取historySearch
        // 拿到历史搜索数据
       var history = getHistory();
        // var history =  window.localStorage.getItem('historySearch');   
        // //  console.log(history);
        // if (history==null){
        //   history = [];
        // }else {
        //     history=JSON.parse(history);
        // }

        if (history.indexOf(searchVal)==-1){
            history.unshift(searchVal);
        }else {
            history.splice(history.indexOf(searchVal),1);
            history.unshift(searchVal);
        }

        // console.log(history);

        window.localStorage.setItem('historySearch', JSON.stringify(history));
        // 渲染页面
        renderPage();

        // $('.history-list ul').html(template("historyListTmp", history));



    })

    //点击删除删除对应那一项
    $('.history-list ul').on('click','span',function(){
       var index= $(this).attr('data-index')
       var history = getHistory();
       history.splice(index,1);
       console.log(history);
       window.localStorage.setItem('historySearch', JSON.stringify(history));
       history = getHistory();
       renderPage();
    })
    
    //点击清空 全删
    $('.searh-history span').last().on('click',function(){
        

        mui.confirm("真的要五杀吗","温馨提示",['我确定','算哒~','oo '],function(e){
            // console.log(e);
            if (e.index==0){
                var history=[];
                window.localStorage.setItem('historySearch', JSON.stringify(history));
                history = getHistory();
                renderPage();

            }

        });

    })




})