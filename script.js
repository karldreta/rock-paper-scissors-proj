// FIRST JS PROJECT by Karl D Reta of the Odin Project

// Declare constant variables
// choices is the array of options for the computer
// x and y will be used later to give a number value to for the result of each round

const choices = ["Rock", "Paper", "Scissors"];
const x = "YOU WIN, ";
const y = "YOU LOSE, ";

function getComputerChoice () {
    // creates a variable randomIndex equalizes it to a random decimal value (0 - 1), 
    // multiplies it to the length (0-2 in this case) of the choices array
    // and "floors it down" to the nearest whole number.
    // then, returns choices array with the randomly chosen number, that number is the index position of any string in the array.
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function playRound() {
    // The first three lines should be nested inside of the function (never outside), for the prompt to called multiple times.
    // variable computerSelection takes the value from the global getComputerChoice function.
    // anyCase asks for prompt and converts it to lowercase.
    // playerSelection now holds the value of anyCase.
    // The conditions strictly uses lowercase for playerSelection, since playerSelection is in lowerCase after all.

    let computerSelection = getComputerChoice();
    let anyCase = prompt("Choose: Rock, Paper or Scissors.").toLowerCase();
    let playerSelection = anyCase;

    if (playerSelection === "rock" && computerSelection === "Paper") {
        return y + "paper covers rock.";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return x + "rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "Rock"){
        return x + "paper covers rock.";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return y + "scissors cuts paper.";
    }else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return y + "rock crushes scissors."; 
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return x + "scissors cuts paper.";
    } else {
        return "A stalemate."; 
    }
}

function roundResult() {
    // This function should return a value for each round
    // Creates a local variable "result", takes the value from playRound function.
    // if the return value of the result variable has either the x or y variable (declared globally), returns 1 and 0 respectively.
    // Otherwise, returns null.

    let result = playRound();
    console.log(result);
    if (!(result.includes(x) || result.includes(y))) {
        return null
    } else if (result.includes(x)) {
        return 1;
    } else {
        return 0
    } 
}

// Begin best of five Game

function game() {
    // Initialize the scores, "The Score Board"
    let playerScore = 0;
    let computerScore = 0;

    // Used a for loop here, 
    // Created variable "round", initialized it to 1.
    // As long as round <= 5; round gets incremented.
    // Created another local variable "result", takes the value from the roundResult function.
    // if-else used to get the result of each round and add it to the "Score Board."
    // Another if-else outside of the for loop, which takes the values from "The Score Board", and compares to display a sixth and last log.
    for (let round = 1; round <= 5; round++) {
        let result = roundResult();

        if (result === 1) {
            playerScore++;
        } else if (result === 0) {
            computerScore++;
        }
    }

        if (playerScore > computerScore) {
            console.log("Congratulations, you beat the computer!");
        }else if (playerScore < computerScore) {
            console.log("Sorry, better luck next time.");
        } else {
            console.log("An impasse.");
        }
}

// Finally call the Function

game();
