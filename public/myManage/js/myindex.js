$(function(){
    //生成柱状图
    // 基于准备好的dom，初始化echarts实例
    console.log("进来了吗");
    var myChart = echarts.init(document.getElementById('histogram'));
        // 指定图表的配置项和数据
        var option1 = {
            title: {
                text: '2017注册人数'
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
                data: ["一月","二月","三月","四月","五月","六月","七月","八月"]
            },
            yAxis: {},
            series: [{
                name: '人数',
                type: 'bar',
                data: [500, 4000, 8000, 7000, 10200, 9000,4000,8000]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        
        var myChart = echarts.init(document.getElementById('BinTu'));
        // 饼状图
        optionBin = {
            title : {
                text: '热门品牌销售',
                subtext: '2017年6月', 
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom',
                data:['耐克','阿迪','百伦','安踏','李宁','rose6']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                // {
                //     name:'半径模式',
                //     type:'pie',
                //     radius : [20, 110],
                //     center : ['25%', '50%'],
                //     roseType : 'radius',
                //     label: {
                //         normal: {
                //             show: false
                //         },
                //         emphasis: {
                //             show: true
                //         }
                //     },
                //     lableLine: {
                //         normal: {
                //             show: false
                //         },
                //         emphasis: {
                //             show: true
                //         }
                //     },
                //     data:[
                //         {value:10, name:'rose1'},
                //         {value:5, name:'rose2'},
                //         {value:15, name:'rose3'},
                //         {value:25, name:'rose4'},
                //         {value:20, name:'rose5'},
                //         {value:35, name:'rose6'},
                //         {value:30, name:'rose7'},
                //         {value:40, name:'rose8'}
                //     ]
                // },
                {
                    name:'面积模式',
                    type:'pie',
                    radius : [30, 110],
                    center : ['50%', '50%'],
                    roseType : 'area',
                    data:[
                        {value:40, name:'耐克'},
                        {value:25, name:'阿迪'},
                        {value:15, name:'百伦'},
                        {value:25, name:'安踏'},
                        {value:20, name:'李宁'},
                        {value:5, name:'rose6'},
                        // {value:30, name:'rose7'},
                        // {value:40, name:'rose8'}
                    ]
                }
            ]
        };

        myChart.setOption(optionBin);





        // 按按钮实现分类管理折叠展开

        $('#classifyFoldBtn').on('click',function(){
            $('#classifyFoldContent').css({display:'block'}).slideToggle();

        })

    })


















