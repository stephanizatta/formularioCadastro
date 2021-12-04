const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

//localhost:8080
app.listen(8080);