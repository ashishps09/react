var express = require('express');
var app = express();
const parseJson = require('parse-json');
var fs = require("fs");

var countCustomerDetails = 0

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/alldata', function (req, res) {
   fs.readFile( "D:/react-app/test/src/assets/data.json", 'utf8', function (err, data) {
      data = JSON.parse(data);
      res.end( JSON.stringify(data) );
   });
})


app.get('/customer/:id', function (req, res) {
    fs.readFile( "D:/react-app/test/src/assets/data.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        customerId = req.params.id
        customerDetails = {}
        for(var key in data['data']){
            if(customerId == data['data'][key]['id'] ){
                  customerDetails[countCustomerDetails++] = data['data'][key]
                  console.log(customerDetails[0])
            } 
        }
        res.end( JSON.stringify(customerDetails) );
    });
 })


app.get('/order/:id', function (req, res) {
    fs.readFile( "D:/react-app/test/src/assets/data.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        customerId = req.params.id
        orderDetails = {}
        countOrderDetails = 0
        for(var key in data['data']){
            if(customerId == data['data'][key]['id']){
                orderDetails[countOrderDetails++] = data['data'][key]
            } 
        }
        res.end( JSON.stringify(orderDetails) );
    });
 })


 app.post('/orderStatus', function (req, res, body) {
    fs.readFile( "D:/react-app/test/src/assets/data.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        customerId = req.body.id
        orderId = req.body.orderId
        orderStatus = req.body.orderStaus
        orderDetails = {}
        countOrderDetails = 0
        for(var key in data['data']){
            if(customerId == data['data'][key]['id'] && orderId == data['data'][key]['orderId']  ){
                data['data'][key]['Status'] = orderStatus
                orderDetails[countOrderDetails++] = data['data'][key]
            } 
        }
        console.log(data)
        res.end( JSON.stringify(orderDetails) );
    });
 })


app.post('/placeOrder', function (req, res, body) {
    fs.readFile( "D:/react-app/test/src/assets/data.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        ID = req.body.id
        Name = req.body.name
        prdId = req.body.productID
        quan = req.body.productQuantity
        orderId = req.body.orderId
        Order = { 
            'ID' : ID,
            'Name' : Name,
            'prdId' : prdId,
            'quan' : quan,
            'orderId' : orderId
        }
        len = data['data'].length()
        data['data'][len] = Order
        res.end( JSON.stringify(data) );
    });
 })

 
 
 var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})