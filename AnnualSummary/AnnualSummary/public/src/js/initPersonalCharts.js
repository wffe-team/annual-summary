var itemnum;
var arrItems = [];
$('.personal-items').each(function () {
    itemnum = $(this).val();
    arrItems.push(itemnum)
});
var personalArr = [];
for (var i = 0; i < arrItems.length - 1; i = i + 7) {
    personalArr.push([arrItems[i], arrItems[i + 1], arrItems[i + 2], arrItems[i + 3], arrItems[i + 4], arrItems[i + 5], arrItems[i + 6]]);
}
(function () {    
    var myChart = echarts.init(document.getElementById('biChart'));
    var option = {
        color: ['#707d8d'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '刘悦'
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
                data: ['高教', '企业', '医药', 'WFUI', '基教','Lab','其他'],
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
                barWidth: '30px',
                data: personalArr[0]
            }
        ]
    };    myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('yangChart'));
    var option = {
        color: ['#707d8d'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '安晓凯'
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
                data: ['高教', '企业', '医药', 'WFUI', '基教','Lab','其他'],
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
                barWidth: '30px',
                data: personalArr[1]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('liChart'));
    var option = {
        color: ['#707d8d'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '崔微娜'
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
                data: ['高教', '企业', '医药', 'WFUI', '基教','Lab','其他'],
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
                barWidth: '30px',
                data: personalArr[2]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('luChart'));
    var option = {
        color: ['#707d8d'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '张凯迪'
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
                data: ['高教', '企业', '医药', 'WFUI', '基教','Lab','其他'],
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
                barWidth: '30px',
                data: personalArr[3]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('liuChart'));
    var option = {
        color: ['#707d8d'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '李利'
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
                data: ['高教', '企业', '医药', 'WFUI', '基教','Lab','其他'],
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
                barWidth: '30px',
                data: personalArr[4]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('zhangChart'));
    var option = {
        color: ['#707d8d'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '杨明'
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
                data: ['高教', '企业', '医药', 'WFUI', '基教','Lab','其他'],
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
                barWidth: '30px',
                data: personalArr[5]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('cuiChart'));
    var option = {
        color: ['#707d8d'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '毕山山'
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
                data: ['高教', '企业', '医药', 'WFUI', '基教','Lab','其他'],
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
                barWidth: '30px',
                data: personalArr[6]
            }
        ]
    }; myChart.setOption(option);
})();
(function () {
    var myChart = echarts.init(document.getElementById('anChart'));
    var option = {
        color: ['#707d8d'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '鹿丹'
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
                data: ['高教', '企业', '医药', 'WFUI', '基教','Lab','其他'],
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
                barWidth: '30px',
                data: personalArr[7]
            }
        ]
    }; myChart.setOption(option);
})();