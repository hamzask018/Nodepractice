const  express= require("express");
const app=express();
let port=5000;

const sendMail=require("./controller/sendMail");

app.get("/",(req,res)=>{
    res.send("I am a server");
});

app.get("/mail",sendMail) //controller ke pass jayega

const start=async()=>{
    try {
        app.listen(port,()=>{
            console.log(`I am live in port no ${port}`);
        })
    } catch (error) {
        
    }
}
start();