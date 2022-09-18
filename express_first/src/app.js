const express= require('express');
const multer = require('multer')
const path = require('path');
const fs=require('fs');
const bodyParser = require("body-parser");
 
const app = express();
app.set("view engine","hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const staticPath = path.join(__dirname,"../public")
console.log(path.join(__dirname+"../public"))
const jsonPath=require(path.join(__dirname,"../src/cart.json"))
//middleware
app.use(express.static(staticPath));

//set file name
app.get("/hbs",(req,res)=>{
    res.render('index',{myname:"saurav sharma"})
})
app.get("/",(req,res)=>{
    res.send("Hello saurav");
});
app.get('/sample_data',(req,res)=>{
    res.send("new page");
})
app.get('/form_upload',(req,res)=>{
    res.send("your data is uploaded");
})
//sending api
app.get('/userapi',(req,res)=>{
    res.send(JSON.stringify(jsonPath))
})
app.get('/test',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/rest_detail.html"))
})
app.get('/test.js',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/test.html"))
})
app.get('/index1.html',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index1.html"))
})


app.listen(3000,()=>{
    console.log("i am listening");
})