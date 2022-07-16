// variable

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')
soundBtn = document.querySelector('.sound')
copyBtn = document.querySelector('.copy')
twitterBtn = document.querySelector('.twitter')


function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quote.innerText = result.content;
        person.innerText = result.author;
        
    });
}



soundBtn.addEventListener('click',()=>{
    // The SpeechSynthesisUtterance is a web speech api that represents a speech request.
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText}by ${person.innerText}`);
    speechSynthesis.speak(utterance);
    // speak method of speechSynthesis speaks the utternance
})


copyBtn.addEventListener('click',()=>{
    // Copying the quote text on copybtn click
    // writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quote.innerText)

})

twitterBtn.addEventListener('click',()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText} by ${person.innerText}`;
    window.open(tweetUrl,"_blank") // open in the new tab
})

btn.addEventListener('click',randomQuote)

