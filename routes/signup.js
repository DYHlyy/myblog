/**
 * Created by lyy on 2017/7/27.
 */
var express = require('express');
var router = express.Router();

var checkNoLogin = require('../middlewares/check').checkNoLogin;

// GET /signup 注册页
router.get('/', checkNoLogin, function (req, res, next) {
    res.send(req.flash());
});

// POST /signup 用户注册
router.post('/', checkNoLogin, function (req, res, next) {
    res.send(req.flash());
});

module.exports = router;