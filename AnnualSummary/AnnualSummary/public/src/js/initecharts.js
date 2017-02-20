(function () {
    var itemnum;
    var arrItems = [];
    $('.items').each(function () {
        itemnum = $(this).val();
        arrItems.push(itemnum)
    });
    var myChart = echarts.init(document.getElementById('career-chart'));        
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['高教', '企业', '医药','WFUI','基教','其他']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    { value: 335, name: '高教' },
                    { value: 310, name: '企业' },
                    { value: 234, name: '医药' },
                    { value: 234, name: 'WFUI' },
                    { value: 234, name: '基教' },
                    { value: 234, name: '其他' }
                ]
            }
        ]
    };
    myChart.setOption(option);
})();