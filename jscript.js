
const QUOTEBANK=[
    {
        quote:"living easy living free",
        author:"AC/DC"
    },
    {
        quote:"hey satan!paid my dues",
        author:"Highway to Hell"
    },
    {
        quote:"Stairway To Heaven",
        author:"led zeppelin"
    }
];

window.onload=init;
function init(){
   generateQuote();
}
function generateQuote (){
let quoteSize= QUOTEBANK.length
let randomIndex= Math.floor(Math.random()*quoteSize);
let randomQuoteData=QUOTEBANK[randomIndex]

    document.getElementById("text").innerHTML= randomQuoteData.quote;
    document.getElementById("author").innerText= "-" + randomQuoteData.author;
}


