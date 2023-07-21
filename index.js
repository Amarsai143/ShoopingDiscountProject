const express = require('express');
const app = express();
const connection = require('./database');

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust the allowed origin if needed
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', function(req, res) {
    let sql = "SELECT * FROM PRODUCTS";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

app.listen(3003, function(){
    console.log('App Listening on port 3003');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected!');
    })
});