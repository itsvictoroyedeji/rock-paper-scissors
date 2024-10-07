console.log("Hey hey hey");

function getComputerChoice() {
  // choose a random number and assign it to “random number” variable 

  // condition: if random number <= 3

  // return “rock”

  // else if random number <=6

  // return “paper”

  // else return “scissors”

}

function getHumanChoice() {
  // get user input that asks “type paper, rock, or scissors” and save to variable “choice”

  // condition: if choice does does not equal “paper, rock, or scissors”

  // rerun the function again

  // else return choice 

} 

//create variable humanScore and assign value 0

//create variable computerScore and assign value 0

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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)

function playGame() {
  
}