﻿var express = require('express');
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
            for (var i = 0; i < obj.members.length; i++) {
                var fullName = obj.members[i].fullName;
                fullNameArr.push(fullName);
            }

            //总项目
            var idList;
            var year = '2016';//设置不同年限的
            for (var i = 0; i < obj.lists.length; i++) {
                if (obj.lists[i].name == year) {
                    idList = obj.lists[i].id;
                }
            }
            //所有项目名称
            var names = [];
            for (var i = 0; i < obj.cards.length; i++) {
                if (obj.cards[i].idList == idList) {
                    var name = obj.cards[i].name;
                    names.push(name);
                }
            }
            //输出项目总数
            console.log('总项目数：'+names.length);

            //不同事业部项目数
            var totalItems = [];
            var otherItem = 0;
            var sum = 0;
            var careerArr = ['高教', '企业', '医药', 'WFUI', '基教', 'Lab'];
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
            console.log(totalItems);

            //不同成员所做的项目
            //定义一个成员测试数据
            //var nameId = '53cf7793331da745cfece5e2';
            var namesItems = [];
            //所有成员对应的ID
            for (var k = 0; k < obj.members.length; k++) {
                var nameId = obj.members[k].id;
                var fullName = obj.members[k].fullName; 
                for (var i = 0; i < obj.cards.length; i++) {
                    for (var j = 0; j < obj.cards[i].idMembers.length; j++) {
                        //判断前端成员是否与参与项目的成员id匹配并且是否是2016年完成
                        if (nameId == obj.cards[i].idMembers[j] && obj.cards[i].idList == idList) {
                            var outItems = fullName + ":" + obj.cards[i].name;
                            namesItems.push(outItems)
                        }
                    }
                } 
            }
            var ly = [];
            var zkd = [];
            var bss = [];
            var cwn = [];
            var axk = [];
            var ll = [];
            var ym = [];
            var ld = [];
            for (var i = 0; i < namesItems.length; i++) {
                var tt = namesItems[i].indexOf(':');
                var arr = namesItems[i].substring(0, tt);
                var items = namesItems[i].substring(tt+1, namesItems.length-1);
                if (arr == '刘悦') {
                    ly.push(items);
                }
                if (arr == '张凯迪') {
                    zkd.push(items);
                }
                if (arr == '毕山山') {
                    bss.push(items);
                }
                if (arr == '李利') {
                    ll.push(items);
                }
                if (arr == '杨明') {
                    ym.push(items);
                }
                if (arr == '鹿丹') {
                    ld.push(items);
                }
                if (arr == '安晓凯') {
                    axk.push(items);
                }
                if (arr == '崔微娜') {
                    cwn.push(items);
                }
            }
            //输出各个成员的2016年，完成的项目名称
            console.log(ly);
            console.log(zkd);
            console.log(ll);
            console.log(bss);
            console.log(axk);
            console.log(ym);
            console.log(cwn);
            console.log(ld);
            // console.log(namesItems);
            //每个成员不同事业部完成项目的个数
            //刘悦
            for (var i = 0; i < ly.length; i++) {
            }




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
            console.log(maxNumberItemName);
            //idMembersFullName
            var idMembersFullName = [];
            var idMembers = obj.cards[maxNumberIndex].idMembers;
            for (var i = 0; i < obj.cards[maxNumberIndex].idMembers.length; i++) {
                var idMembersItem = obj.cards[maxNumberIndex].idMembers[i];
                for (var j = 0; j < obj.members.length; j++) {
                    var id = obj.members[j].id;
                    if (idMembersItem == id) {
                        idMembersFullName.push(obj.members[j].fullName)
                    }
                }
            }
            //输出成员姓名
            console.log(idMembersFullName);

            res.render('index', { value: fullNameArr, maxNumber: maxNumberItemName, idNumbersNames: idMembersFullName, totalItems: totalItems });
        }
    });

});

module.exports = router;