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

            /**
             * 前端成员
             */

            var fullNameArr = [];
            var idArr = [];//前端成员id
            for (var i = 0; i < obj.members.length; i++) {
                var fullName = obj.members[i].fullName;
                var id = obj.members[i].id;
                fullNameArr.push(fullName);
                idArr.push(id);
            }

            /**
             * 总项目
             */

            //var date = new Date();
            //var year = date.getFullYear();
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

            /**
             * 个人项目分布
             */

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
                count(careerArr, personalItem);
                //for (var m = 0; m < careerArr.length; m++) {
                //    var single = 0;
                //    for (var n = 0; n < personalItem.length; n++) {
                //        if (personalItem[n].indexOf(careerArr[m]) > -1 && personalItem[n].indexOf(careerArr[m]) < 3) {
                //            single++;
                //        }
                //    }
                //    total += single;
                //    arr.push(single);
                //}
                other = personalItem.length - total;
                arr.push(other);
                persoanlArr.push(arr);
            }

            /**
             * Labels各个标签对应项目的数量
             */

            //默认设置的标签类型 （labelsName）
            var labelsName = [];
            for (x in obj.labelNames) {
                labelsName.push(x)
            }
            //所有项目的标签 （labels）
            //输出各个类型标签所对应的项目类型 （colorName）
            //假定需要输出有上线压力的项目名称 （color）
            var labels = [];
            for (var i = 0; i < card.length; i++) {
                var label = card[i].labels;
                for (var j = 0; j < label.length; j++) {
                    labels.push(card[i].labels[j].color);
                }
            }
            //各个标签的数量（lablesNumber）
            var lablesNumber = [];
            for (var i = 0; i < labelsName.length; i++) {
                var iNum = 0;
                for (var j = 0; j < labels.length; j++) {
                    if (labelsName[i] == labels[j]) {
                        iNum++;
                    }
                }
                lablesNumber.push(iNum);
            }
            //输出各个标签 （labelsName）以及对应的数量(lablesNumber)
            console.log(labelsName);
            console.log(lablesNumber);

            //按工作量查询各事业部的项目
            var itemsArr = [];            
            var itemArr;
            for (var k = 0; k < labelsName.length; k++) {
                itemArr = [];
                var arr = [];
                var total = 0;
                var other = 0;
                for (var i = 0; i < card.length; i++) {
                    for (var j = 0; j < card[i].labels.length; j++) {
                        if (labelsName[k] == card[i].labels[j].color) {
                            itemArr.push(card[i].name);
                        }
                    }                   
                }
                count(careerArr, itemArr);
                other = itemArr.length - total;
                arr.push(other);
                //persoanlArr.push(arr);
                itemsArr.push(arr);
            }
            console.log(itemsArr);

            //统计各事业部的项目数函数
            function count(all, item) {
                for (var m = 0; m < all.length; m++) {
                    var single = 0;
                    for (var n = 0; n < item.length; n++) {
                        if (item[n].indexOf(all[m]) > -1 && item[n].indexOf(all[m]) < 3) {
                            single++;
                        }
                    }
                    total += single;
                    arr.push(single);
                }
            }

            /**
             *  项目完成状态
             */

            var falseItems = [];
            var trueItems = [];
            var completeItems = [];

            for (var i = 0; i < obj.cards.length; i++) {
                if (obj.cards[i].due != null) {
                    if (obj.cards[i].dueComplete == true) {
                        itemsIndex = obj.cards[i].name.indexOf(' -');
                        if (itemsIndex != -1) {
                            trueItems.push(obj.cards[i].name);
                            completeItems.push(obj.cards[i].name);
                        }
                    } else {
                        itemsIndex = obj.cards[i].name.indexOf(' -');
                        if (itemsIndex != -1) {
                            falseItems.push(obj.cards[i].name);
                            completeItems.push(obj.cards[i].name);
                        }
                    }
                }
            }
            var strEndDate;
            var strEndDateNumber;
            var strEndDateArr = [];
            for (var i = 0; i < careerArr.length; i++) {
                strEndDateNumber = 0;
                for (var j = 0; j < completeItems.length; j++) {
                    itemsIndex = completeItems[j].indexOf(' -');
                    strEndDate = completeItems[j].substring(0, itemsIndex);
                    if (careerArr[i] == strEndDate) {
                        strEndDateNumber++;
                    }
                }
                strEndDateArr.push(strEndDateNumber);
            }
            //sort处理
            completeItems = completeItems.sort()
            //设定时间项目
            // console.log(completeItems);
            //项目类别
           // console.log(careerArr);
            //设定时间项目对用项目类别的数量
          //  console.log(strEndDateArr);
            //设定时间完成的项目
            //console.log(trueItems);
            //设定时间未完成的项目
            // console.log(falseItems);

            /**
             * pause的项目名称
             */

            //假设需要Pause的项目名称
            var pause = 'Pause';
            var pauseItems = [];
            var itemsIndex;//是否只输出项目的名称
            for (var i = 0; i < obj.actions.length; i++) {
                if (obj.actions[i].data.listAfter != undefined && obj.actions[i].data.listAfter.name == pause) {
                    itemsIndex = obj.actions[i].data.card.name.indexOf(' -');
                    if (itemsIndex != -1) {
                        pauseItems.push(obj.actions[i].data.card.name);
                    }
                }
            } 
            //输出Pause的项目名称
           // console.log(pauseItems);

            /**
             * 参与项目人数最多
             */

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
            res.render('index', { value: fullNameArr, maxNumber: maxNumberItemName, idNumbersNames: idMembersFullName, totalItems: totalItems, persoanlArr: persoanlArr, careerArr: careerArr, pauseItems: pauseItems, completeItems: completeItems, strEndDateArr: strEndDateArr, labelsName: labelsName, lablesNumber: lablesNumber});
        }
    });

});

module.exports = router;