const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 2500;

app.use(bodyParser.urlencoded({ 
    extended:true
})); 

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) { 
    var username = String(req.body.username); 
    var password = String(req.body.password); 
      
    if (username == "mayankJain" && password == "India@2020") {
        res.send(importData); 
    } else {
        res.send("You are not authorized to access the Din Dinn API");
    }
      
  }); 

app.listen(port, () => {
    console.log('App is listening on port');
})