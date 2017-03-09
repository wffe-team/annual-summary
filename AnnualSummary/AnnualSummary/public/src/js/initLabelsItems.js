(function () {
    var labelsName = [];
    var persoanlArr = [];
    $('.careerArr').each(function () {
        persoanlArrVal = $(this).val();
        persoanlArr.push(persoanlArrVal);
    });
    var lablesNumber = [];
    $('.labelsName').each(function () {
        persoanlArrVal = $(this).val();
        labelsName.push(persoanlArrVal);
    });
    var personalArr = [];
    for (var i = 0; i < arrItems.length - 1; i = i + 7) {
        personalArr.push([arrItems[i], arrItems[i + 1], arrItems[i + 2], arrItems[i + 3], arrItems[i + 4], arrItems[i + 5], arrItems[i + 6]]);
    }
    console.log(personalArr)
    var myChart = echarts.init(document.getElementById('labelsItemsL'));
    var option = {
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: persoanlArr
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: labelsName[0], max: 22 },
                { name: labelsName[1], max: 16 },
                { name: labelsName[2], max: 20 },
                { name: labelsName[3], max: 20 },
                { name: labelsName[4], max: 20 },
                { name: labelsName[5], max: 20 }
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: personalArr[0],
                    name: persoanlArr[0]
                },
                {
                    value: personalArr[1],
                    name: persoanlArr[1]
                },
                {
                    value: personalArr[2],
                    name: persoanlArr[2]
                },
                {
                    value: personalArr[3],
                    name: persoanlArr[3]
                },
                {
                    value: personalArr[4],
                    name: persoanlArr[4]
                },
                {
                    value: personalArr[5],
                    name: persoanlArr[5]
                }
            ]
        }]
    };
    myChart.setOption(option);
})();