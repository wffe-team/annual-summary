var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    fs.readFile('trellodata.json', 'utf8', function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            var obj = JSON.parse(data);
            //前端成员
            var fullNameArr = [];
            var idArr = [];//前端成员id
            for (var i = 0; i < obj.members.length; i++) {
                var fullName = obj.members[i].fullName;
                var id = obj.members[i].id;
                fullNameArr.push(fullName);
                idArr.push(id);
            }
            //总项目
            var year = '2016';//设置不同年限的
            var idList;
            for (var i = 0; i < obj.lists.length; i++) {
                if (obj.lists[i].name == year) {
                    idList = obj.lists[i].id;
                }
            }
            //所有项目名称
            var names = [];
            var card = [];//2016所有项目的数据
            for (var i = 0; i < obj.cards.length; i++) {
                if (obj.cards[i].idList == idList) {
                    var name = obj.cards[i].name;
                    names.push(name);
                    card.push(obj.cards[i]);
                }
            }
            //输出项目总数
            // console.log('总项目数：' + names.length);
            //不同事业部项目数
            var totalItems = [];
            var otherItem = 0;
            var sum = 0;
            //获得项目类的名称
            var careerArrTest = [];
            for (var i = 0; i < obj.cards.length; i++) {
                var strIndex = obj.cards[i].name.indexOf(' -');
                if (strIndex != -1) {
                    var str = obj.cards[i].name;
                    str = str.substring(0, strIndex);
                    careerArrTest.push(str);
                }
            }
            //除去重复项目类的名称
            var careerArr;
            Array.prototype.unique = function () {
                careerArr = [];
                var json = {};
                for (var i = 0; i < this.length; i++) {
                    if (!json[this[i]]) {
                        careerArr.push(this[i]);
                        json[this[i]] = 1;
                    }
                }
                return careerArr;
            }
            careerArrTest.unique();
            //输出各个项目类的名称careerArr
           // console.log(careerArr);
            totalItems.push(names.length);
            for (var i = 0; i < careerArr.length; i++) {
                var singleNum = 0;
                for (var j = 0; j < names.length; j++) {
                    if (names[j].indexOf(careerArr[i]) > -1 && names[j].indexOf(careerArr[i]) < 3) {
                        singleNum++;
                    }
                }
                sum += singleNum;
                totalItems.push(singleNum);
            }
            otherItem = names.length - sum;
            totalItems.push(otherItem);
            //console.log(totalItems);

            //个人项目分布
            var persoanlArr = [];
            for (var i = 0; i < idArr.length; i++) {
                var personalItem = [];
                var arr = [];
                var total = 0;
                var other = 0;
                //每个人的项目
                for (var j = 0; j < card.length; j++) {
                    if (card[j].idMembers.indexOf(idArr[i]) > -1) {
                        personalItem.push(card[j].name);
                    }
                }
                for (var m = 0; m < careerArr.length; m++) {
                    var single = 0;
                    for (var n = 0; n < personalItem.length; n++) {
                        if (personalItem[n].indexOf(careerArr[m]) > -1 && personalItem[n].indexOf(careerArr[m]) < 3) {
                            single++;
                        }
                    }
                    total += single;
                    arr.push(single);
                }
                other = personalItem.length - total;
                arr.push(other);
                persoanlArr.push(arr);
            }


            //Labels各个标签对应项目的数量
            //所有项目的标签
            var labels = [];
          
            for (var i = 0; i < obj.cards.length; i++) {
                var label = obj.cards[i].labels;
                for (var j = 0; j < label.length; j++) {
                    console.log(obj.cards[i].labels[j].color);
                }
            }
            //限定年限2016
           //console.log(obj.labelNames);

            //参与项目人数最多
            var mNumber = [];
            for (var i = 0; i < obj.cards.length; i++) {
                var membersLength = obj.cards[i].idMembers.length;
                mNumber.push(membersLength);
            }
            //参与最多人数的个数
            var maxNumber = Math.max.apply(null, mNumber);
            //对应的索引
            var maxNumberIndex = mNumber.indexOf(maxNumber);
            //参与人数最多的项目名称
            var maxNumberItemName = obj.cards[maxNumberIndex].name;
            //输出项目名称
            //console.log(maxNumberItemName);
            //idMembersFullName
            var idMembersFullName = [];
            var idMembers = obj.cards[maxNumberIndex].idMembers;
            for (var i = 0; i < obj.cards[maxNumberIndex].idMembers.length; i++) {
                var idMembersItem = obj.cards[maxNumberIndex].idMembers[i];
                for (var j = 0; j < obj.members.length; j++) {
                    var id = obj.members[j].id;
                    //限制年限
                    if (idMembersItem == id && obj.cards[maxNumberIndex].idList == idList) {
                        idMembersFullName.push(obj.members[j].fullName)
                    }
                }
            }
            //输出成员姓名
            //console.log(idMembersFullName);
            res.render('index', { value: fullNameArr, maxNumber: maxNumberItemName, idNumbersNames: idMembersFullName, totalItems: totalItems, persoanlArr: persoanlArr, careerArr: careerArr });
        }
    });

});

module.exports = router;