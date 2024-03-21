  const http=require("http");
  const fs=require("fs");
  const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end('Kam khatam hogaya');
    }else if(req.url=="/about"){
        res.end("welcome to about us page");
    }else if(req.url=="/contact"){
        res.write("welcome to contact u3424s1 page");
        res.end();
    }
    else if(req.url=="/userapi"){
        fs.readFile("./userApi/userapi.json","utf-8",(err,data)=>{
            console.log(data);
            const obj=JSON.parse(data);
            // console.log(obj[0].name);
            res.end(obj[0].name);
        });
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error aankh hai na?</h1>");
    }
  })

  server.listen('8000','127.0.0.1',()=>{
     console.log("hello");
  })

