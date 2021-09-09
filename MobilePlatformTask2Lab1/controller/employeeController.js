const express = require('express');

const mongoose=require('mongoose');
const Employee = mongoose.model('Employee')
var router= express.Router();




router.get('/',(req,res)=>{
   
    Employee.find({}).lean().exec(function(err,docs){
       if(!err){
           
              // list:docs
               res.json(docs);     
       }
       else{
           console.log('Error in retreiveing employee list: ' + err);
       }
    });
});


module.exports=router