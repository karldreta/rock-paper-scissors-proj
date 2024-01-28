let x = "Rock";
let y = "Paper";
let z = "Scissors";
const choices = [x, y, z]

function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
let computerSelection = getComputerChoice();
let anyCase = prompt("Choose: Rock, Paper or Scissors.").toLowerCase();
let playerSelection = anyCase;

// Begin Round -->

function playRound(playerSelection,computerSelection) {

   if (playerSelection === "rock" && computerSelection === y) {
    return "LOSE. Paper covers rock.";
   } else if (playerSelection === "rock" && computerSelection === z) {
    return "WIN! Rock beats scissors.";
   } else if (playerSelection === "paper" && computerSelection === x){
    return "WIN! Paper covers rock.";
   } else if (playerSelection === "paper" && computerSelection === z) {
    return "LOSE. Scissors cuts paper.";
   }else if (playerSelection === "scissors" && computerSelection === x) {
    return "LOSE. Rock crushes scissors."; 
   } else if (playerSelection === "scissors" && computerSelection === y) {
    return "WIN! Scissors cuts paper.";
   } else if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")) {
    return "Choose only: Rock, Paper or Scissors, try again.";
} else {
    return "A stalemate.";
   }
}

// Call the rounds 
// Set a best of five game

function game() {
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection)); 
}

game();
