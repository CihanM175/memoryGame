let cards = document.querySelectorAll('.cats')
let hasFlippedCard = false 
let firstCard, secondCard;


function flipCard(){
    this.classList.add('flip')
    if (!hasFlippedCard){
    //    first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
     // first click
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch();
       }
    
}
    // removed a lot of nested code and cleaned it up a bit

function checkForMatch(){
    let isMatch = firstCard.dataset.framework === 
    secondCard.dataset.framework;
    
    isMatch ? cancelCards() : unflipCards()
}

function cancelCards(){
     firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
}


function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip'); 
        },1500)
}


cards.forEach (card => card.addEventListener('click',flipCard))