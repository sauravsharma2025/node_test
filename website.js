const http = require('http')
const fs = require('fs')
const port = process.env.PORT ||3000
const server=http.createServer((req, res)=>{
   console.log(req.url);
   res.statusCode=200;
   res.setHeader('Content-type','text/html');
   if(req.url=='/'){
    res.statusCode=200;
    res.end('<hi>hi saurav why youwant to access another page</h1><p>ok i will allow but</p>')
   }
   else if(req.url=='/about'){
    res.statusCode=200;
    res.end('<h1>i am saurav about mpagew</h1>')
   }
   else if(req.url=='/hello'){
    res.statusCode=200;
   const data=fs.readFileSync('index.html')

    res.end(data.toString)
   }
   else{
    res.statusCode=404;
    res.end('<h1>Not found</h1>')
   }

})
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});