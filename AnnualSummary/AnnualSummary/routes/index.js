var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    fs.readFile('trellodata.json', function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            //  var data = JSON.parse(data.toString('utf8'));
            var string = JSON.parse(data);
            var fullNameArr = [];
            for (var i = 0; i < string.members.length; i++) {
                var fullName = string.members[i].username;
                fullNameArr.push(fullName);
            }
            res.render('index', { value: fullNameArr });
        }
    });

});

module.exports = router;