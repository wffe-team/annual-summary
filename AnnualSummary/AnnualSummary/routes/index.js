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
            res.render('index', { value: fullNameArr });
        }
    });

});

module.exports = router;