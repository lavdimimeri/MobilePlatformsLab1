require('./models/db')
const express = require('express');
var app=express();


const employeeController=require('./controller/employeeController');

const serverPort=3000
app.listen(serverPort,()=>{
    console.log("Server running on port: " + serverPort)
})


//app.get('/',function(request,response){
 //   response.send('index page requested');
 //   response.end();
//})

app.use('/',employeeController);