var express = require('express');

var app =express();

app.get('/register',function (req,res) {
    var name = req.query.name;
    var passwd = req.query.passwd;

    //1,引入模块
    var UserDao = require('./UserDao');
    //2,创建对象
    var userDao = new UserDao();
    //3,初始化
    userDao.init();


    userDao.insert(name,passwd,function (result) {
        res.render('home',{});
    });



});