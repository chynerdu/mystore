var express = require('express'),
    Bourne  = require('bourne'),
    bodyParser =require('body-parser'),

    db     = new Bourne('data.json'),
    router = express.Router();

    router
       
         .use(function(req, res, next){
             if (!req.user) req.user={id:1};
             next();
         })
         .use(bodyParser.json()) 
         .route('/store')
         .get(function(req, res){
             db.find({ userId: parseInt(req.user.id, 10)}, function(err, data){
                 res.json(data);
             });
         })
         .post(function (req, res){
             var store=req.body;
             store.userId = req.user.id;

             db.insert(store, function (err, data){
                 res.json(data);
             });
         });
         router
                .param('id', function (req, res, next){
                    req.dbQuery ={ id: parseInt(req.params.id, 10)}
                    next();
             }) 
                .route('/store/:id')
                .get(function(req, res){
                    db.findOne(req.dbQuery, function(err, data){
                        res.json(data);
                    });
                })
                .put(function(req, res){
                    var store= req.body;
                    delete store.$promise;
                    delete store.$resolved;
                    db.update(req.dbQuery, store, function(err, data){
                        res.json(data[0]);
                    });
                })
                .delete(function(req, res){
                  db.delete(req.dbQuery, function(){
                      res.json(null);
                  }); 
                });
                module.exports= router;

