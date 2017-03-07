var itemnum;
var arrItems = [];
$('.labels-items').each(function () {
    itemnum = $(this).val();
    arrItems.push(itemnum)
});
var personalArr = [];
for (var i = 0; i < arrItems.length - 1; i = i + 7) {
    personalArr.push([arrItems[i], arrItems[i + 1], arrItems[i + 2], arrItems[i + 3], arrItems[i + 4], arrItems[i + 5], arrItems[i + 6]]);
}

var persoanlArr = [];
$('.careerArr').each(function () {
    persoanlArrVal = $(this).val();
    persoanlArr.push(persoanlArrVal);
});
persoanlArr.push('其他');
(function () {
    var myChart = echarts.init(document.getElementById('green'));
    var option = {
        color: ['green'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: 'green'
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
                data: persoanlArr,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '项目数',
                type: 'bar',
                barWidth: '60%',
                data: personalArr[0]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('red'));
    var option = {
        color: ['red'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: 'red'
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
                data: persoanlArr,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '项目数',
                type: 'bar',
                barWidth: '60%',
                data: personalArr[1]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('purple'));
    var option = {
        color: ['purple'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: 'purple'
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
                data: persoanlArr,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '项目数',
                type: 'bar',
                barWidth: '60%',
                data: personalArr[2]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('blue'));
    var option = {
        color: ['blue'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: 'blue'
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
                data: persoanlArr,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '项目数',
                type: 'bar',
                barWidth: '60%',
                data: personalArr[3]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('black'));
    var option = {
        color: ['#000'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: 'black'
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
                data: persoanlArr,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '项目数',
                type: 'bar',
                barWidth: '60%',
                data: personalArr[4]
            }
        ]
    }; myChart.setOption(option);
})();