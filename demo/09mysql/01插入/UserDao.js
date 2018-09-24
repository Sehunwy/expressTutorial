function UserDao() {
    this.init=function () {
   var mysql  = require('mysql');  //调用MySQL模块

//1，创建一个connection
        var connection = mysql.createConnection({
            host     : 'localhost',       //主机 ip
            user     : 'root',            //MySQL认证用户名
            password : 'root',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database:'fs_music'          //数据库里面的数据
        });
//2,连接
        connection.connect();
    }
    
    this.insert=function (name,passwd,callback) {
        //3,编写sql语句
        var  userAddSql = 'INSERT INTO users(name,password) VALUES(?,?)';
        var  userAddSql_Params = [name, passwd];
//4,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，userAddSql_Params，sql语句中的值
         * 3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        connection.query(userAddSql,userAddSql_Params,function (err, result) {
            if(!err){
                callback(result);
            }
        });
//5,连接结束
        connection.end();
    }
}