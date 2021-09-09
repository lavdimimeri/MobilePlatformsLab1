var express = require('express');
var app=express();
const serverPort=3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  


  app.listen(serverPort,()=>{
    console.log("Server running on port: " + serverPort)
})