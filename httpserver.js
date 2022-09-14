const http = require("http");
const server = http.createServer((req,res)=>{
   if(req.url=='/'){
    res.end("Hello from saurav sharma side");
    }
    else if(req.url=='/about'){
        res.end("i will not tell you about myself");
    }
    else if(req.url=='/contact'){
        res.end('this is contact us page');
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h2>404 page not found</h2>');
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port number 8000");
})