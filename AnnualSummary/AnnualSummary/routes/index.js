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
            for (var i = 0; i < obj.members.length; i++) {
                var fullName = obj.members[i].fullName;
                fullNameArr.push(fullName);
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

            res.render('index', { value: fullNameArr });
        }
    });

});

module.exports = router;