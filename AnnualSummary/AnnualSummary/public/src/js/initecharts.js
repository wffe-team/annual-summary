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
            formatter: "{b}<br/>{c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['高教', '企业', '医药','WFUI','基教','Lab','其他']
        },
        series: [
            {
                name: '',
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
                    { value: arrItems[1], name: '高教' },
                    { value: arrItems[2], name: '企业' },
                    { value: arrItems[3], name: '医药' },
                    { value: arrItems[4], name: 'WFUI' },
                    { value: arrItems[5], name: '基教' },
                    { value: arrItems[6], name: 'Lab' },
                    { value: arrItems[7], name: '其他' }
                ]
            }
        ]
    };
    myChart.setOption(option);
})();