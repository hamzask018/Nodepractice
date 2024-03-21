
//HOSTING A STATIC WEBSITE USING EXPRESS
const express= require('express');
const hbs=require("hbs");
const app=express();
const path = require('path');
const port=8000;
// let path1=path.join(__dirname,"../public");
// console.log(path1);
const staticPath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../template/views");
const partialpath=path.join(__dirname,"../template/partials");
/** 
 * To set route engine
*/
app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partialpath);
/**
 * To serve static website 
 * below code
 */
// app.use(express.static(staticPath));

/**
 * Template Engine Route
*/
app.get("",(req,res)=>{
  res.render('index',{
    channelName:"Hamza"
  });
})
//Jo pehle likhoge wohi aayega 

app.get('/',(req,res)=>{
  res.send("Hello this is the server where i am going to host my website ");

})
app.get("/about",(req,res)=>{
  res.render('about',{
    channelName:"Hamza"
  });
})

app.get('/about/*',(req,res)=>{
  res.render("404",{
    errorcoment:"Opps this about Us Page not fond"
  });
})

app.get('*',(req,res)=>{
    res.render("404",{
      errorcoment:"Opps Page not fond"
    });
})

app.listen(port,()=>{  
  console.log(`listing to port ${port}`);
})

