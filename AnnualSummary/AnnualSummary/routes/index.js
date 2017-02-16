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

            res.render('index', { value: fullNameArr });
        }
    });

});

module.exports = router;