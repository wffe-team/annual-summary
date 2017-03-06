(function () {
    var itemnum;
    var arrItems = [];
    $('.items').each(function () {
        itemnum = $(this).val();
        arrItems.push(itemnum)
    });

    var persoanlArrTotle = [];
    $('.careerArr').each(function () {
        persoanlArrVal = $(this).val();
        persoanlArrTotle.push(persoanlArrVal);
    })
   
    persoanlArrTotle.push('其他');

    var myChart = echarts.init(document.getElementById('career-chart'));        
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>{c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: persoanlArrTotle
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
                    { value: arrItems[1], name: persoanlArrTotle[0] },
                    { value: arrItems[2], name: persoanlArrTotle[1] },
                    { value: arrItems[3], name: persoanlArrTotle[2] },
                    { value: arrItems[4], name: persoanlArrTotle[3] },
                    { value: arrItems[5], name: persoanlArrTotle[4] },
                    { value: arrItems[6], name: persoanlArrTotle[5] },
                    { value: arrItems[7], name: persoanlArrTotle[6] }
                ]
            }
        ]
    };
    myChart.setOption(option);
})();