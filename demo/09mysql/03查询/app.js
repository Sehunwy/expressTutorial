var express = require('express');
var UserDao = require('./UserDao');
var app = express();
//3,指定模板引擎
app.set("views engine", 'ejs');
//4,指定模板位置
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/home', function (req, res) {
    //1,创建对象
    var dao = new UserDao();
   //2，数据初始化，连接数据库
    dao.init();
    //3,查询语句
    dao.query(0,'users',function (err, data) {

        console.log(data);
        res.render('home', {
                introduce:'你的用户密码不正确',
                order:{price:'100'},
                name: '门户页面',users:data
            }
        );
    })


})

var server = app.listen(8080)