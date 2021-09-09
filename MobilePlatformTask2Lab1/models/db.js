const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('Succesful connection to MongoDB')
    }
});

require('./employee.model');