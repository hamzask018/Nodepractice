
let realdata="";
const quotes=document.getElementById("quotes");
const author=document.getElementById("author");
const newq=document.getElementById("newq");
const getnewQuotes=()=>{
    let rnum=Math.floor(Math.random()*10);
    
    quotes.innerText=`${realdata[rnum].text}`;
    author.innerText=`${realdata[rnum].author}`;

}
const getQuotes= async()=>{
    const api="https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
         realdata= await data.json();
        // console.log(realdata.length);
        getnewQuotes();
    } catch (error) {
        
    }
};
newq.addEventListener('click',getnewQuotes);

getQuotes();
