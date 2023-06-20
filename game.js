let cards = document.querySelectorAll('.cats')
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard(){
    if(lockBoard) return;
   if (this === firstCard) return;
    
   this.classList.add('flip')
    if (!hasFlippedCard){
    //    first click
        hasFlippedCard = true;
        firstCard = this;
    return;
    }
        secondCard = this;
        checkForMatch();
       }
    

    // removed a lot of nested code and cleaned it up a bit

function checkForMatch(){
    let isMatch = firstCard.dataset.framework === 
    secondCard.dataset.framework;
    
    isMatch ? cancelCards() : unflipCards();
}
   
    

function cancelCards(){
     firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
        resetBoard();
}


function unflipCards(){
    lockBoard = true
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip'); 
        resetBoard();
        },900)
}

function resetBoard(){
    [hasFlippedCard,lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
    cards.forEach(card => {
     let randomPos = Math.floor(Math.random() * 12);
     card.style.order = randomPos;   
    });
    // IIFE function
 })();  

// Declare global variables
let timerInterval;
let seconds = 0;
let timerDuration = 30; // Set the timer duration in seconds
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('startButton');

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
  seconds++;
  timerElement.textContent = formatTime(timerDuration - seconds);
  if (seconds >= timerDuration) {
    stopTimer();
    gameOver ();
  }
}

// Function to format the time values as two digits
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Event listener for the start button
startButton.addEventListener('click', function() {
    startTimer();
    startButton.style.display = 'none'; // Hide the button after starting the game
  });


  // Get the game over modal and restart button elements
let modal = document.getElementById('game-over-modal');
let restartButton = document.getElementById('restartButton');

// Function to display the game over modal
function showGameOverModal() {
  modal.style.display = 'flex';
}

// Function to hide the game over modal
function hideGameOverModal() {
  modal.style.display = 'none';
}
function gameOver(){
    showGameOverModal();
}

function resetGameBoard() {
    cards.forEach((card) => {
    card.removeEventListener('click', flipCard);
      card.classList.remove('flip');
    });
  
    setTimeout(() => {
      cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
      });
      cards.forEach((card) => {
        card.addEventListener('click', flipCard);
      });
      lockBoard = false; // Reset the lockBoard flag
    }, 1000); // Delay the shuffling to allow cards to flip back
  }

  function resetGame() {
    stopTimer();
    seconds = 0;
    timerElement.textContent = formatTime(timerDuration);
    hideGameOverModal();
    resetGameBoard();
    startTimer();
  }
  

// Add an event listener to the restart button
restartButton.addEventListener('click', function() {
    hideGameOverModal();
   resetGame();
  });
// You win modal
  const youWinModal = document.getElementById('you-win-modal');

function showYouWinModal() {
  youWinModal.style.display = 'flex';
}
function hideYouWinModal() {
    youWinModal.style.display = 'none';
  }
  







cards.forEach (card => card.addEventListener('click',flipCard))