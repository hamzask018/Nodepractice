const fs=require('fs');
 fs.writeFile("asyncpractice.txt","async practice kar raha hu bhai",(err)=>{
    console.log(err);
 })
 fs.appendFile("asyncpractice.txt","ye abhi mein ne ye data append kiya hai",(err)=>{
    console.log(err);
 })

 fs.readFile("asyncpractice.txt","utf-8",(err,data)=>{
    console.log(data);
 })