var express = require("express");
var app = express();

//设置静态文件
app.use(express.static('public'));
//指定模板引擎
app.set("views engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/views');

app.get("/index", function(req, res) {
    var singleimgs = [
        {img:'images/s6.jpg'},
        {img:'images/s2.jpg'},
        {img:'images/s3.jpg'},
        {img:'images/s4.jpg'}
    ];
    var pics = [
        {class:'col-md-6 creative-left',img:'images/pic1.jpg'},
        {class:'above-creative',img:'images/pic2.jpg'}
    ]

    var icns = [
        {img:'images/icn1.png',txt:'Feature One'},
        {img:'images/icn2.png',txt:'Feature Two'},
        {img:'images/icn3.png',txt:'Feature Three'}
    ];
    res.render('index',{
        title:'We Are Creative designers',
        welcometitle:'Welcome',
        historytitle:'Look back to our History',
        pics:pics,
        icns:icns,
        singleimgs:singleimgs,
        s1:'images/s1.jpg',
        s5:'images/s5.jpg'
    });
});

app.get("/about", function(req, res) {
    var persons = [
        {img:'images/t1.jpg',name:'John',position:'Ceo'},
        {img:'images/t2.jpg',name:'Smith',position:'Founder'},
        {img:'images/t3.jpg',name:'Mark',position:'Founder'},
        {img:'images/t4.jpg',name:'Malorum',position:'Founder'},
        {img:'images/t5.jpg',name:'John',position:'Founder'},
        {img:'images/t6.jpg',name:'Jenny',position:'Founder'}
    ];
    res.render('about',{
        title:'About Us',
        persons:persons,
        team:'Meet Our Team',
        ab:'images/ab.jpg'
    });
});

app.get("/shortcodes", function(req, res) {
    res.render('shortcodes',{
        title:'Short Codes'
    });
});

app.get("/gallery", function(req, res) {
    var imgs1 = [
        {img:'images/g1.jpg',a:'#portfolioModal1'},
        {img:'images/g2.jpg',a:'#portfolioModal2'},
        {img:'images/g3.jpg',a:'#portfolioModal3'},
    ];

    var imgs2 = [
        {img:'images/g4.jpg',a:'#portfolioModal4'},
        {img:'images/g5.jpg',a:'#portfolioModal5'},
        {img:'images/g6.jpg',a:'#portfolioModal6'}
    ];

    var imgs3 = [
        {img:'images/g7.jpg',a:'#portfolioModal7'},
        {img:'images/g8.jpg',a:'#portfolioModal8'},
        {img:'images/g9.jpg',a:'#portfolioModal9'}
    ];
    res.render('gallery',{
        title:'Gallery',
        imgs1:imgs1,
        imgs2:imgs2,
        imgs3:imgs3
    });
});

app.get("/contact", function(req, res) {
    res.render('contact',{
        title:'Contact Us'
    });
});

app.get("/single", function(req, res) {
    var persons = [
        {img:'images/c1.png',name:'Richard Spark',infor:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
            '\t\t\t\t\tDuis aute irure dolor in reprehenderit .',class:''},
        {img:'images/c2.png',name:'Joseph Goh',infor:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
            '\t\t\t\t\tDuis aute irure dolor in reprehenderit .',class:'in-media'},
        {img:'images/c3.png',name:'Melinda Dee',infor:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
            '\t\t\t\t\tDuis aute irure dolor in reprehenderit .',class:''}
    ];
    res.render('single',{
        title:'3 Comments',
        titleh2:'Leave a Comment',
        persons:persons,
        sing:'images/sing.jpg'
    });
});

app.listen(3002);