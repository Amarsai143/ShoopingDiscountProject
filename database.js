var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'mydb',
    user: 'root',
    password: ''
});

module.exports = connection;