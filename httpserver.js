const http = require("http");
const fs= require('fs');
const server = http.createServer((req,res)=>{
    const data=fs.readFileSync(`${__dirname}/user_api/userapi.json`,'utf-8')
        const org_obj=JSON.parse(data);
   if(req.url=='/'){
    res.end("Hello from saurav sharma side");
    }
    else if(req.url=='/about'){
        res.end("i will not tell you about myself");
    }
    else if(req.url=='/contact'){
        res.end('this is contact us page');
    }
    else if(req.url=='/userapi'){
        res.writeHead(200,{"content-type":"application/json"})
         res.end(org_obj[0].image);
     }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h2>404 page not found</h2>');
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port number 8000");
})