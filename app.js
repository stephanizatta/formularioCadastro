const express = require("express");
const app = express();

//Conecta com o BD
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'prog',
    password: '',
    database: 'progweb',
});

connection.connect(function (err){
    if(err){
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.stack);
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

//localhost:8080
app.listen(8080);