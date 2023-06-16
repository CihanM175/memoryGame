let cards = document.querySelectorAll('.cats')
let hasFlippedCard = false 
let firstCard, secondCard;


function flipCard(){
    this.classList.add('flip')
    if (!hasFlippedCard){
    //    first click
        hasFlippedCard = true
    } else {
     // first click
        hasFlippedCard = false;
        secondCard = this;
    }
}
cards.forEach (card => card.addEventListener('click',flipCard))