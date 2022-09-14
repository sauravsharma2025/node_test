const express=require('express');
app=express();
app.get('/',(req,res)=>{
    res.send("hello home page");
})
app.get('/about',(req,res)=>{
    res.status(404).send("this is about");
})
app.get('/contact',(req,res)=>{
    res.status(200).send("this is contact")
})
app.get('/myjson',(req,res)=>{
    res.status(200).json([{
        name:"saurav",
        age:28
    },
    {
        name:"Gaurav",
        age:32
    }
])
})
app.listen(3000,()=>{
    console.log('listening to the port 3000')
})