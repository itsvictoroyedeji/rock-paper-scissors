console.log("Welcome to the game!");

function getComputerChoice() {
  // generate a random number, round it down to an integer, and assign it to “randomNumber” variable 
  let randomNumber = Math.floor(Math.random() * 10) + 1;

  //Display randomNumber (for debugging purposes)
  //console.log("Random num: " + randomNumber);

  // condition: if random number <= 3
  if (randomNumber <= 3) {
  // return “rock”
    return "rock";
  // else if random number <=6
  } else if (randomNumber <= 6) {
  // return “paper”
    return "paper";
  // else return “scissors”
  } else {
    return "scissors";
  }
}

// initialize global "choice" variable
let choice;

function getHumanChoice() {
  // get user input that asks “type paper, rock, or scissors” and save to variable “choice”
  choice = prompt("Type rock, paper, or scissors", '');

  // condition: if choice is null, end function.
  if (choice == null) { 
    return; 
    // else: make all characters lowercase (to be case-insensitive)
  } else { 
    choice = choice.toLowerCase(); 
  }

  // switch statement: if choice does not equal “paper, rock, or scissors”
    switch(choice) {
      case "paper":
      case "rock":
      case "scissors":
        return choice;
    }
} 

// Declare global variables humanSelection and computerSelection to use in playGame() function
let humanSelection;
let computerSelection;

// Call playGame() function!
playGame();

// playGame function is declared here
function playGame() {
  //create variable humanScore and assign value 0
  let humanScore = 0;

  //create variable computerScore and assign value 0
  let computerScore = 0;

  // declare playRound function to configure single round of play
  function playRound(humanChoice, computerChoice) {
    // condition: if humanChoice equals undefined
    if (humanChoice == undefined) {
      // console.log: "Game didn't play. Try again"
      console.log("Game didn't play. Try again");
    // else if: if humanChoice equals rock and computerChoice equals paper
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
      // console log: "You lose! Paper beats Rock."
      console.log("You lose! Paper beats Rock");
      // increment computerScore variable by one
      computerScore++;
    
    // else if: humanChoice equals rock and computerChoice equals scissors
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
      // console log: "You win! Rock beats Scissors."
      console.log("You win! Rock beats Scissors.")
      // increment humanScore variable by one
      humanScore++;
  
    // else if: humanChoice equals paper and computerChoice equals scissors
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
      // console log: "You lose! Scissors beats Paper."
      console.log("You lose! Scissors beats Paper.")
      // increment computerScore variable by one
      computerScore++;
    // else if: humanChoice equals paper and computerChoice equals rock
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
      // console log: "You win! Paper beats Rock."
      console.log("You win! Paper beats Rock.")
      // increment humanScore variable by one
      humanScore++;
  
    // else if: humanChoice equals scissors and computerChoice equals rock
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
      // console log: "You lose! Rock beats Scissors."
      console.log("You lose! Rock beats Scissors.");
      // increment computerScore variable by one
      computerScore++;
  
    // else if: humanChoice equals scissors and computerChoice equals paper
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
      // console log: "You win! Scissors beats Paper."
      console.log("You win! Scissors beats Paper.");
      // increment humanScore variable by one
      humanScore++;
  
    // else: console log: "It's a tie";
    } else {
      console.log("It's a tie.");
    }
  }

  // Add a loop where playRound function is called 5 times
  for (let i = 0; i < 5; i++) {
    // Call getHumanChoice function and assign to humanSelection
    humanSelection = getHumanChoice();

    // optional: end loop if humanSelection is undefined
    if (humanSelection == undefined) {
      console.warn("Your Selection is undefined. Ending game.");
      break;
    }

    // Call getComputerChoice function and assign to computerSelection
    computerSelection = getComputerChoice();

    // Enter round number here
    console.log("Round " + (i + 1) + ":");
    // Display both human and computer selections
    console.log("Human Selection: " + humanSelection);
    console.log("Computer score: " + computerSelection);
    
    // Call playRound function here!
    playRound(humanSelection, computerSelection);

    // Show the scores after each round (via console.log)
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
  }

  // condition: if humanScore > computerScore, console.log: "You won!"
  if (humanScore > computerScore) {
    console.log("You won the Game!".toUpperCase());

  // else if: computerScore > humanScore, console.log: "The computer won."
  } else if (computerScore > humanScore) {
    console.log("The computer won.".toUpperCase());

    // else: console.log: "It's a tie."
  } else {
    console.log("Game ended in a tie.".toUpperCase());
  }

}