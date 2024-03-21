const http=require("http");
const fs=require("fs");
var requests=require("requests");
const homeFile=fs.readFileSync("home.html","utf-8");

const replaceval=(tempval,orgval)=>{
    let temperature = tempval.replace("%tempval%", ((orgval.main.temp - 273)).toFixed(2) );
    temperature = temperature.replace("{%tempmin%}", ((orgval.main.temp_min - 32)*(5/9)).toFixed(2) );
    temperature = temperature.replace("{%tempmax%}", ((orgval.main.temp_max - 32)*(5/9)).toFixed(2) );
    temperature = temperature.replace("{%location%}", orgval.name);
    temperature = temperature.replace("{%country%}", orgval.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgval.weather[0].main);
    return temperature;
}
const server=http.createServer((req,res)=>{
    if(req.url="/"){
       requests("https://api.openweathermap.org/data/2.5/weather?q=sangli&appid=ce2bdc804094f87f941f7a615cb0d6e9" ).on("data",(chunk)=>{
        const objdata=JSON.parse(chunk);
        const arrdata=[objdata];
        // console.log(arrdata[0].main.temp);
        const realtimedata=arrdata.map((val)=>
            replaceval(homeFile,val)).join("");
            res.write(realtimedata);
            // console.log(realtimedata);
       }).on("end",function(err){
        if(err) return console.log("Connection Closed due to an error",err);
         res.end();
       })
    }
});

server.listen(9000,"127.0.0.1");



