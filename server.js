var express = require('express');
var app = express();
 var api = require('./api');
var port = process.env.PORT || 3000;

 app
         .use(express.static('./public'))
         .use('/api', api)
         .get('*', function (req, res){
         res.sendfile('public/main.html');
});

var server = app.listen(port, function () {
    console.log('node server is just fine! and running on port - ' + port);
});