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
(function () {
    var itemnum;
    var idNumbersNames = [];
    $('.idNumbersNames').each(function () {
        itemnum = $(this).val();
        idNumbersNames.push(itemnum)
    });
    var maxNumber = $('#maxNumber').val();
    var myChart = echarts.init(document.getElementById('maxItemsName'));
    var option = {
        backgroundColor: '#777',

        title: {
            text: "参与人员最多的项目："+maxNumber,
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 300, name: idNumbersNames[0] },
                    { value: 300, name: idNumbersNames[1] },
                    { value: 300, name: idNumbersNames[2] },
                    { value: 300, name: idNumbersNames[3] },
                    { value: 300, name: idNumbersNames[4] }
                ].sort(function (a, b) { return a.value - b.value }),
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '18'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    myChart.setOption(option);
})();
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
        color: ['#BD3330'],
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
(function () { 
//标签名  
    var labelsName = [];
    $('.labelsName').each(function () {
        persoanlArrVal = $(this).val();
        labelsName.push(persoanlArrVal);
    });
    var itemnum;
    var arrItems = [];
    $('.labels-items').each(function () {
        itemnum = $(this).val();
        arrItems.push(itemnum)
    });
//数据
    var personalArr = [];
    for (var i = 0; i < arrItems.length - 1; i = i + 7) {
        personalArr.push([arrItems[i], arrItems[i + 1], arrItems[i + 2], arrItems[i + 3], arrItems[i + 4], arrItems[i + 5], arrItems[i + 6]]);
    }
    //事业部
    var careerArr = [];
    $('.careerArr').each(function () {
        persoanlArrVal = $(this).val();
        careerArr.push(persoanlArrVal);
    });
    careerArr.push('其他');
    //series
    var seriesData = [];
    for (var i = 0; i < personalArr[0].length; i++) {
        var value = [];
        for (var j = 0; j < personalArr.length; j++) {
            value.push(personalArr[j][i]);
        }
        seriesData.push({
            value: value,
            name:careerArr[i]
        })
    }

    var myChart = echarts.init(document.getElementById('labelsItemsL'));
    var option = {
        title: {
            
        },
        tooltip: {},
        legend: {
            data: careerArr
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: labelsName[0], max: 10 },
                { name: labelsName[3], max: 5 },
                { name: labelsName[2], max: 5 },
                { name: labelsName[1], max: 16 },
                { name: labelsName[4], max: 5 }
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: seriesData
        }]
    };
    myChart.setOption(option);
})();
(function () {
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

    var persoanlArr = [];
    $('.careerArr').each(function () {
        persoanlArrVal = $(this).val();
        persoanlArr.push(persoanlArrVal);
    });
    persoanlArr.push('其他');

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
                barWidth: '30px',
                data: personalArr[0]
            }
        ]
    }; myChart.setOption(option);

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
                barWidth: '30px',
                data: personalArr[1]
            }
        ]
    }; myChart.setOption(option);

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
                barWidth: '30px',
                data: personalArr[2]
            }
        ]
    }; myChart.setOption(option);

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
                barWidth: '30px',
                data: personalArr[3]
            }
        ]
    }; myChart.setOption(option);

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
                barWidth: '30px',
                data: personalArr[4]
            }
        ]
    }; myChart.setOption(option);

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
                barWidth: '30px',
                data: personalArr[5]
            }
        ]
    }; myChart.setOption(option);

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
                barWidth: '30px',
                data: personalArr[6]
            }
        ]
    }; myChart.setOption(option);

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
                barWidth: '30px',
                data: personalArr[7]
            }
        ]
    }; myChart.setOption(option);
})();
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