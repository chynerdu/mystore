var express = require('express');
var app = express();
 var api = require('./api');
 
var port = process.env.PORT || 3000;
var users =require('./accounts');

 app
         .use(express.static('./public'))
         .use(users)
         .use('/api', api)
         .get('/', function (req, res){
          res.sendfile('public/main.html');
             
})

         .get('/store', function (req, res){
          res.sendfile('public/main.html');
             
})
         .get('/klikstore', function (req, res){
          res.sendfile('public/main.html');
             
})
         .get('/store/products', function (req, res){
          res.sendfile('public/main.html');
             
})
         .get('/store/contact', function (req, res){
          res.sendfile('public/main.html');
             
})
         .get('/notfound', function (req, res){
          res.sendfile('public/main.html');
             
})
         .get('/adminpanel', function (req, res){
          res.sendfile('public/login.html');
             
})

 .get('/list', function (req, res){
             if (!req.user){
             res.redirect('/login');
             }else{
          res.sendfile('public/main.html');
             }
})

var server = app.listen(port, function () {
    console.log('node server is just fine! and running on port - ' + port);
}); 