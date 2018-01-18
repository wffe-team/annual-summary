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

    var listData = [];
    for (var i = 0; i < persoanlArrTotle.length; i++) {
        var listJson = { value: '', name: '' };
        listJson.value = arrItems[i + 1];
        listJson.name = persoanlArrTotle[i];
        listData.push(listJson);
    }

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
                data: listData
            }
        ]
    };
    myChart.setOption(option);
})();