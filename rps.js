console.log("Hey hey hey");

function getComputerChoice() {
  // generate a random number, round it down to an integer, and assign it to “randomNumber” variable 
  let randomNumber = Math.floor(Math.random() * 10) + 1;

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

function getHumanChoice() {
  // get user input that asks “type paper, rock, or scissors” and save to variable “choice”
  let choice = prompt("paper, rock, or scissors", '');
  // switch statement: if choice does not equal “paper, rock, or scissors”
    switch(choice) {
      case "paper":
      case "rock":
      case "scissors":
        return choice;
        break;
      default:
        // alert them to type one of the choices
        alert("type one of the three choices")
    }
} 

//create variable humanScore and assign value 0
let humanScore = 0;

//create variable computerScore and assign value 0
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  //make humanChoice case-insensitive

  // condition: if humanChoice equals rock and computerChoice equals paper
    // console log: "You lose! Paper beats Rock."
    // increment computerScore variable by one
  // else if: humanChoice equals rock and computerChoice equals scissors
    // console log: "You win! Rock beats Scissors."
    // increment humanScore variable by one
  // else if: humanChoice equals paper and computerChoice equals scissors
    // console log: "You lose! Scissors beats Paper."
    // increment computerScore variable by one
  // else if: humanChoice equals paper and computerChoice equals rock
    // console log: "You win! Paper beats Rock."
    // increment humanScore variable by one
  // else if: humanChoice equals scissors and computerChoice equals rock
    // console log: "You lose! Rock beats Scissors."
    // increment computerScore variable by one
  // else if: humanChoice equals scissors and computerChoice equals paper
    // console log: "You win! Scissors beats Paper."
    // increment humanScore variable by one
  // else: console log: "It's a tie";
}

// let humanSelection = getHumanChoice();
//let computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection)

// function playGame() {
  
// }