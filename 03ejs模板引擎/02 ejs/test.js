var express = require("express");

var app =express();
//3,指定模板引擎
app.set("views engine", 'ejs');
//4,指定模板位置
app.set('views', __dirname + '/views');
app.get('/index',function (req,res) {
    var users = [];
    var Student = require('./been/Studemt.js');
    for(let i=0;i<10;i++){
        users.push(new Student("小米",i+18));
    }
    res.render('index',{title:"好页面",users,infor:{length:10,money:'2000万',users:users}});
});
app.listen(9999);