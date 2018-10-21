var mongo = require('mongodb');
var express = require('express');
var monk = require('monk');
var db =  monk('localhost:27017/fixit');
var app = new express();
var bodyParser = require('body-parser');

app.use(bodyParser());
//app.use(express.static(__dirname + '/public'));

app.post('/createissue', function (req, res) {
    received_json = req.body;
    var collection = db.get('test');
    console.log(received_json);
    collection.insert(received_json);
    res.status(200).send('successfully added');
});

app.get('/receiveissue', function (req,res) {
  var collection = db.get('test');
  collection.find({},function(err,docs){
            if (err === null){
                res.json(docs);
            } else {
                res.send({
                    msg: err
                });
            }
        })
});

app.listen(3000)
