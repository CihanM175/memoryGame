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
        
        console.log(firstCard.dataset.framework);
        console.log(secondCard.dataset.framework);
    }
}
cards.forEach (card => card.addEventListener('click',flipCard))