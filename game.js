let cards = document.querySelectorAll('.cats')
function flipCard(){
    this.classList.toggle('flip')
}
cards.forEach (card => card.addEventListener('click',flipCard))