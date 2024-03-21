// const EventEmitter=require("events");

// const event=new EventEmitter();
// event.on('saymyname',()=>{
//     console.log("Hello Hamza Congrats on 10SGPA");
// });
// event.on('saymyname',()=>{
//     console.log("SAY ALLHAMDULLILAH");
// });
// event.on('saymyname',()=>{
//     console.log("KEEP IT UP!!");
// });

// event.emit('saymyname');

const EventEmitter=require("events");
const event =new EventEmitter;

event.on('checkpage',(src,msg)=>{
    console.log(`status code is ${src} and the page is ${msg}`);
})

event.emit('checkpage',200,"ok");