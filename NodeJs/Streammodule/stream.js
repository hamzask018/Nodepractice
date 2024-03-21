const fs=require('fs');
const http=require('http');

const server=http.createServer();

server.on("request",(req,res)=>{
    // fs.readFile("input.txt","utf-8",(err,data)=>{
    //     console.error(err);
    //     res.end(data);
    // })
    // const readstream=fs.createReadStream('inputs.txt');

    // readstream.on('data',(chunkdata)=>{
    //     res.end(chunkdata);
    // });
    // readstream.on('end',()=>{
    //     res.end();
    // })
    // readstream.on('error',()=>{
    //     res.end("filenotfound");
    // })

    // 3rdway
    const readstream=fs.createReadStream('input.txt');
    readstream.pipe(res);
})

server.listen(8000,"127.0.0.1"); 
