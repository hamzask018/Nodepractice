const fs=require('fs');
const myobj={
    name:"hihihi",
    age:7658,
    loc:"sangli"
 }

 const h=JSON.stringify(myobj);

 fs.writeFile("jsonpractice.json",h,()=>{
    console.log("passedsuccesfull");
 })


 const r=fs.readFile("jsonpractice.json","utf-8",(err,data)=>{
    const data1=JSON.parse(data);
    console.log(data);
 });

//  console.log(JSON.parse(r));
