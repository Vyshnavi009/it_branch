const express = require('express');
const path =require('path');
const Router =express.Router();
const userSchema=require('./register');
const attendenceSchema=require('./attendencedata');
var tempname;


Router.get('/',(req,res)=>{
    res.render(path.join(__dirname,'login.ejs'));
})

Router.post('/signup',async(req,res)=>{

    try{
        const {
            Username,
            password
        } = req.body;
        
    
    const userData =new userSchema({
        Username,
        password
    })
    userData.save(err=>{
        if(err){
            console.log('Error')
        }
        else{
            res.render(path.join(__dirname,'login.ejs'));
        }
    })      
    }
    catch(error){
        console.log(error)
    }
})

Router.post('/login',(req,res)=>{
    const{
        Username,
        password
    }=req.body;
    userSchema.findOne({Username:Username},(err,result)=>{
        try{
        if(Username===result.Username && password===result.password){
            tempname = result.Username;
            //console.log(tempname)
            res.render(path.join(__dirname,'index.ejs'));

        }
        else{
            res.render(path.join(__dirname,'login.ejs'));
        }
    }
        catch(err){
            res.render(path.join(__dirname,'login.ejs'));
        }
   
    })
})
Router.get('/IT%203-1%20CS%20&%20Syllabus_UG_R20.pdf',(req,res)=>{
    res.sendFile(path.join(__dirname,'IT 3-1 CS & Syllabus_UG_R20.pdf'));
})
Router.get('/attendence.ejs',(req,res)=>{

    attendenceSchema.findOne({Username:tempname},'attendence',(err,result)=>{
        try{
           // console.log(attendenceSchema.tempname)
                res.render(path.join(__dirname,'attendence.ejs'),{title : result.attendence})
            
        }
        catch(err){
            console.log(err);
        }

    })
    
})



Router.get('/materials.ejs',(req,res)=>{
    res.render(path.join(__dirname,'materials.ejs'));
})

module.exports=Router;