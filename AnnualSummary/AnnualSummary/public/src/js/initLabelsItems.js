(function () {   
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
    var personalArr = [];
    for (var i = 0; i < arrItems.length - 1; i = i + 7) {
        personalArr.push([arrItems[i], arrItems[i + 1], arrItems[i + 2], arrItems[i + 3], arrItems[i + 4], arrItems[i + 5], arrItems[i + 6]]);
    }
    var careerArr = [];
    $('.careerArr').each(function () {
        persoanlArrVal = $(this).val();
        careerArr.push(persoanlArrVal);
    });
    careerArr.push('其他');

    var myChart = echarts.init(document.getElementById('labelsItemsL'));
    var option = {
        title: {
            
        },
        tooltip: {},
        legend: {
            data: labelsName
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: careerArr[0], max: 10 },
                { name: careerArr[1], max: 16 },
                { name: careerArr[2], max: 5 },
                { name: careerArr[3], max: 5 },
                { name: careerArr[4], max: 5 },
                { name: careerArr[5], max: 5 },
                { name: careerArr[6], max: 5 }
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: personalArr[0],
                    name: labelsName[0]
                },
                {
                    value: personalArr[1],
                    name: labelsName[3]
                },
                {
                    value: personalArr[2],
                    name: labelsName[2]
                },
                {
                    value: personalArr[3],
                    name: labelsName[1]
                },
                {
                    value: personalArr[4],
                    name: labelsName[4]
                },
                {
                    value: personalArr[5],
                    name: labelsName[5]
                }
            ]
        }]
    };
    myChart.setOption(option);
})();