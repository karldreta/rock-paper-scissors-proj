// Grab the necessary elements

const gameTitle = document.querySelector('#gameTitle');
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const playerScore = document.querySelector('#playerScore');
const roundNum = document.querySelector('#roundNum');
const computerScore = document.querySelector('#computerScore');
const choiceBtns = document.querySelectorAll('.choiceButton');
choiceBtns.forEach(button => button.addEventListener('click', getPlayerChoice));


// Initialize the game scores
let playerRunningScore = 0;
let computerRunningScore= 0;
let roundsPlayed = 0;


// Get Player Choice and pass it as an argument for startGame()

function getPlayerChoice(e) {
    playerChoice = e.target.textContent.toLowerCase();
    startGame(playerChoice); // startGame now carries the playerChoice value with it, which can then be passed down from it.
}


// Get Computer Choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computer;

    switch (randomNumber) {
        case 1:
            computer = "rock";
        break;
        case 2:
            computer = "paper";
        break;
        case 3:
            computer = "scissors";
        break;
    }

    return computer;
}

function playRound(player) {
    let computer = getComputerChoice();
    let result;  


    if ((player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")) {
        result = "Player";
       } else if (player === computer) {
        result = "Draw";
       } else {
        result = "Computer";
       }

       playerText.textContent = `${player.toUpperCase()}`;
       computerText.textContent = `${computer.toUpperCase()}`;
       resultText.textContent = `${result.toUpperCase()}`;

       return result;
}


function roundResult() {
    let result = playRound(playerChoice); 

    if (!(result.includes("Player") || result.includes("Computer"))) {
        return null
    } else if (result.includes("Player")) {
        return 1;
    } else {
        return 0;
    } 

}

function startGame () {

    function oneRound() {
        let result = roundResult();

        if(result === 1) {
            playerRunningScore++;
        } else if (result === 0) {
            computerRunningScore++;
        } 

        playerScore.textContent = `0${playerRunningScore}`;
        computerScore.textContent = `0${computerRunningScore}`;
        roundNum.textContent = `${roundsPlayed + 1}`;
    }

    oneRound();
    roundsPlayed++;

    if (roundsPlayed === 5) {
        declareWinner()
    }
}


function declareWinner() {
    if (playerRunningScore > computerRunningScore) {
        gameTitle.textContent = `Winner: Player`;
    } else if (playerRunningScore < computerRunningScore) {
        gameTitle.textContent = `Winner: Computer`;
    } else {
        gameTitle.textContent = `Play Tie Breaker`;
    }

    // Restarts the game
    playerRunningScore = 0;
    computerRunningScore = 0;
    roundsPlayed = 0; 
}