const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

var User = require('../schemas/User.model.js');
var Product = require('../schemas/Product.model.js');


var db = 'mongodb://localhost:27017/mean'
mongoose.connect(db, { useMongoClient: true });

// Get Users
router.get('/users', function(req,res){
    User.find({})
    .exec(function(err,results){
    if(err){
        res.send('Error Occured');
        console.log(err)
    }
    else{
        res.json(results);
    }
    })
})

// Get Products
router.get('/products', function(req,res){
    Product.find({})
    .exec(function(err,results){
    if(err){
        res.send('Error Occured');
        console.log(err)
    }
    else{
        res.json(results);
    }
    })
})

router.post('/products', function(req,res){
    Product.create(req.body,function(err,result){
        if(err){res.send('Error Creating Product')
        }else{res.send(result)}
    })
})

module.exports = router;

