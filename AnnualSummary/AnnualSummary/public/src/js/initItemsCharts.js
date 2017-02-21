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
        backgroundColor: '#2c343c',

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
                            color: 'rgba(255, 255, 255, 0.3)',
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