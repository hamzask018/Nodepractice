const express = require("express");
 const app= express();

 app.get('/',(req,res)=>{
   res.send("<h1>Ahlan wa sahlan to home page</h1>");
 })
 app.get('/about',(req,res)=>{
    res.status(200).send("Ahlan wa sahlan to about page");
  })
  app.get('/contact',(req,res)=>{
    res.send("Ahlan wa sahlan to contact page");
  })
  // app.get('/temp',(req,res)=>{
  //   res.send([{
  //     temp:"29degC",
  //     city:"Sangli",
  //     pincode:416415
  //   },
  //   {
  //     temp:"29degC",
  //     city:"Sangli",
  //     pincode:416415
  //   },
  //   {
  //     temp:"29degC",
  //     city:"Sangli",
  //     pincode:416415
  //   }
  // ]);
  // })
//Another Mathod
app.get('/temp',(req,res)=>{
  res.json([{
    temp:"29degC",
    city:"Sangli",
    pincode:416415
  },
  {
    temp:"29degC",
    city:"Sangli",
    pincode:416415
  },
  {
    temp:"29degC",
    city:"Sangli",
    pincode:416415
  }
]);
})
  app.listen(8000,()=>{
    console.log("listening to port 8000")
  })