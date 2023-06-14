let cards = document.querySelectorAll('.catCards')
function flipCard(){
    this.classList.toggle('flip')
}
cards.forEach (card => card.addEventListener('click',flipCard))