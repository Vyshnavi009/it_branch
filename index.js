const mongoose = require('mongoose')
const bodyParser =require("body-parser")
const express =require("express")
const homeRouter = require('./homeroute')
const path=require('path')
const app=express()

app.use(bodyParser.json())
//app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({
    extended : true
}))
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/website',{useNewUrlParser:true})
const db=mongoose.connection;

db.on('error',()=>console.log("Error in connecting to the database"))
db.once('open',()=>console.log("connected to the database"))


app.use('/',homeRouter)

app.listen(3000)
{
    console.log("listening to 3000");
}