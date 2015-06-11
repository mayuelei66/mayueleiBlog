/**
 * Created by mayuelei on 15/6/6.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('aboutMe', { title: 'mayuelei\'s blog' });
});

module.exports = router;