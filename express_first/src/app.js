const express= require('express');
const path = require('path');
const fs=require('fs');
const bodyParser = require("body-parser");
 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
const staticPath = path.join(__dirname,"../public")
//middleware
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("Hello saurav");
});
app.get('/sample_data',(req,res)=>{
    res.send("new page");
})
app.get('/test',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/rest_detail.html"))
})
app.post('/form_upload',function(req,res){
    // fs.writeFileSync("cart.json",JSON.stringify(req.body))
    const fileData = JSON.parse(fs.readFileSync('cart.json'))
fileData.push(req.body)
fs.writeFileSync("cart.json",JSON.stringify(fileData))
console.log("l26",fileData)

res.send(req.body.restname);

})
app.listen(3000,()=>{
    console.log("i am listening");
})