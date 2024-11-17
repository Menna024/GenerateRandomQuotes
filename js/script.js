//array of objects to hold quote and author
var quotes = [
    {
        Quote: "Be yourself; everyone else is already taken.",
        Author: "Oscar Wilde"
    },
    {
        Quote: `I'm selfish, 
       impatient and a little insecure.
       I make mistakes, I am out of control and at times hard to handle.
       But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
        Author: "Marilyn Monroe"
    },
    {
        Quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        Author: "Dr. Seuss"
    },
    {
        Quote: "You only live once, but if you do it right, once is enough.",
        Author: "Mae West"
    },
    {
        Quote: "Be the change that you wish to see in the world.",
        Author: "Mahatma Gandhi"
    },
    {
        Quote: `You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.`,
        Author: "William W. Purkey"
    },
    {
        Quote: `Be who you are and say what you feel, 
        because those who mind don't matter, and those who matter don't mind.`,
        Author: "Bernard M. Baruch"
    },
    {
        Quote: "A room without books is like a body without a soul.",
        Author: "Marcus Tullius Cicero"
    },
    {
        Quote: `Two things are infinite: 
        the universe and human stupidity;
         and I'm not sure about the universe.`,
        Author: "Albert Einstein"
    },
    {
        Quote: "So many books, so little time.",
        Author: "Frank Zappa"
    },
]

var prevNumber=-1;

function randomNumber() {
    var random = Math.floor(Math.random() * quotes.length);
    //console.log('random '+random);
    if(random === prevNumber){
        //console.log('used');
        return randomNumber();
    }
    else
    {
        prevNumber = random;
    }

    return random;
}


function displayQuote() {
    var random = randomNumber();
    document.getElementById("quote").innerHTML ='"'+ quotes[random].Quote + '"';
    document.getElementById("author").innerHTML = '-'+quotes[random].Author;
}


