const express = require("express");

const app = express();

app.get("/", function(res){
    res.sendFile(__dirname + "/src/index.html");
});

app.listen(8080); 