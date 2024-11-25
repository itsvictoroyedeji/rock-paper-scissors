// Get elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');

// Initialize player/computer choice variables
let playerChoice;
let computerChoice;

// Set the score
let playerScore = 0;
let computerScore = 0;

// Set overall match wins
let overallPlayerWins = 0;
let overallComputerWins = 0;


// Create + append elements
const playerResult = document.createElement("p");
playerResult.className = "player-choice";

const computerResult = document.createElement("p");
computerResult.className = "computer-choice";

const gameResult = document.createElement("p");
gameResult.className = "game-result"; 

const lineSpace = document.createElement("br");

const score = document.createElement("p");
computerResult.className = "score"; 

const matchWins = document.createElement("p");
matchWins.className = "match-wins";

result.appendChild(playerResult);
result.appendChild(computerResult);
result.appendChild(gameResult);
result.appendChild(lineSpace);
result.appendChild(score);
result.appendChild(lineSpace);
result.appendChild(matchWins);


// Add event listeners to each button to play round
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// Add event listeners to each button to increase click counter
rock.addEventListener('click', clickCounter);
paper.addEventListener('click', clickCounter);
scissors.addEventListener('click', clickCounter);

let clicks = 0;

function clickCounter() {
  const count = document.querySelector('.counter');
  clicks += 1;
  count.textContent = `Clicks: ${clicks}`;
  if (clicks == 150) {
    alert("That's a lot of clicks! Share the word 😀");
  }
  if (clicks == 250) {
    alert("I learned how to code this from following TheOdinProject.com");
  }
  if (clicks == 500) {
    alert("Okay, it might be time to go back to work!")
  }
}

// function logic to play a single round
function playRound(e) {

  // Logic to get computer choice
  function getComputerChoice() {
    // generate a random number between 1-10, round it down to an integer, and assign it to “randomNumber” variable 
    let randomNumber = Math.floor(Math.random() * 10) + 1;
  
    //Display randomNumber (for debugging purposes)
    //console.log("Random num: " + randomNumber);
  
    if (randomNumber <= 3) {
      return "rock";
    } else if (randomNumber <= 6) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  // Helper Function to Capitalize first letter in player and computer choice string
  function capFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
  }

  // Helper Function to display total match wins after the first match
  function displayMatchWins() {
    matchWins.innerText = "Overall game score:\n " + "You: " + overallPlayerWins + " | Computer: " + overallComputerWins;
  }

  // Function to reset score after 5 wins
  function resetScore() {
    playerScore = 0;
    computerScore = 0;
  }

  // Get player choice from button clicked
  playerChoice = e.target.textContent.toLowerCase();

  // Get computer choice
  computerChoice = getComputerChoice();

  // Show player and computer results in text format
  playerResult.textContent = `Your choice: ${capFirstLetter(playerChoice)}`;

  computerResult.textContent = `Computer choice: ${capFirstLetter(computerChoice)}`;


  // Game logic
  if ((playerChoice === "rock") && (computerChoice === "paper")) {
    gameResult.textContent = "You lose! Paper beats Rock";
    // increment computerScore variable by one
    computerScore++;

  } else if ((playerChoice === "rock") && (computerChoice === "scissors")) {
    gameResult.textContent = " Rock beats Scissors.";
    // increment playerScore variable by one
    playerScore++;

  } else if ((playerChoice === "paper") && (computerChoice === "scissors")) {
    gameResult.textContent = "You lose! Scissors beats Paper.";
    computerScore++;

  } else if ((playerChoice === "paper") && (computerChoice === "rock")) {
    gameResult.textContent = " Paper beats Rock.";
    playerScore++;

  } else if ((playerChoice === "scissors") && (computerChoice === "rock")) {
    gameResult.textContent = " You lose! Rock beats Scissors.";
    computerScore++;

  } else if ((playerChoice === "scissors") && (computerChoice === "paper")) {
    gameResult.textContent = "  Scissors beats Paper.";
    playerScore++;

  } else {
    gameResult.textContent = "It's a tie.";
  }

  // Change text color depending on result
  if (gameResult.textContent.includes("win")) {
    gameResult.style.color = "green";
  } else if (gameResult.textContent.includes("lose")) {
    gameResult.style.color = "red";
  } else {
    gameResult.style.color = "inherit";
  }

  // Display score:
  score.textContent = `Score - You: ${playerScore} | Computer: ${computerScore}`;
  
  // First score to 5 wins logic
  if (playerScore === 5) {
    gameResult.textContent = "😀 YOU WON THE GAME! 🥂";
    overallPlayerWins++;
    displayMatchWins();
    resetScore();
  } else if (computerScore === 5) {
    gameResult.textContent = "😭 THE COMPUTER BEAT YOU";
    overallComputerWins++;
    displayMatchWins();
    resetScore();
  }

}
