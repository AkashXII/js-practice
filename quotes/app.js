//const key=ArbzgiBuVYTnq1FGH399GQ==iAyJF7e3KXXZ3mYv 
//const url=const url = "https://api.api-ninjas.com/v1/quotes?category=inspirational";
const quoteSet = new Set([
    "Believe you can and you're halfway there.",
    "Do not wait to strike till the iron is hot; make it hot by striking.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You miss 100% of the shots you don't take.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Don’t watch the clock; do what it does. Keep going.",
    "oyy balle balle clean gone"
]);
const holder = document.getElementById("holder");
const generateBtn = document.getElementById("generate");
const genquote=[...quoteSet]
let avaquote=[...genquote]
generateBtn.addEventListener("click", () =>{
    if(avaquote.length===0){
        avaquote=[...genquote]
    }
    let randomnumber=Math.floor(Math.random()*avaquote.length)
    let quote=avaquote[randomnumber]
    avaquote.splice(randomnumber, 1);//removes the quote
    holder.textContent=quote;
})

