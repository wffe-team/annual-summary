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