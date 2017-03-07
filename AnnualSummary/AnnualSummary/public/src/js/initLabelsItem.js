(function () {
    var labelsName = [];
    var lablesNumber = [];
    $('.labelsName').each(function () {
        persoanlArrVal = $(this).val();
        labelsName.push(persoanlArrVal);
    });
    $('.lablesNumber').each(function () {
        lablesNumber.push($(this).val())
    });
    var myChart = echarts.init(document.getElementById('labelsItems'));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: [1]
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: labelsName
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '',
                type: 'bar',
                data: lablesNumber
            },

        ]
    };
    myChart.setOption(option);
})();