(function () {
    var persoanlArr = [];
    var strEndDateArr = [];
    $('.careerArr').each(function () {
        persoanlArrVal = $(this).val();
        persoanlArr.push(persoanlArrVal);
    });
    $('.strEndDateArr').each(function () {
        strEndDateArr.push($(this).val())
    });
    var myChart = echarts.init(document.getElementById('setendtime'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>{c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: persoanlArr
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: strEndDateArr[0], name: persoanlArr[0] },
                    { value: strEndDateArr[1], name: persoanlArr[1] },
                    { value: strEndDateArr[2], name: persoanlArr[2] },
                    { value: strEndDateArr[3], name: persoanlArr[3] },
                    { value: strEndDateArr[4], name: persoanlArr[4] },
                    { value: strEndDateArr[5], name: persoanlArr[5] }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
})();