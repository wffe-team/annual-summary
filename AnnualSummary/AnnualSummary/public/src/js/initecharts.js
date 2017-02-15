(function () {
    var myChart = echarts.init(document.getElementById('career-chart'));        
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['高教公图', '企业政府', '医药','WFUI','Lab']
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
                    { value: 335, name: '高教公图' },
                    { value: 310, name: '企业政府' },
                    { value: 234, name: '医药' },
                    { value: 234, name: 'WFUI' },
                    { value: 234, name: 'Lab' }
                ]
            }
        ]
    };
    myChart.setOption(option);
})();