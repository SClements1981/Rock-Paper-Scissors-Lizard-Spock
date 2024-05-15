// Rock paper scissor lizard spock

/** DOM */
const choices = ["rock", "paper", "scissor", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");


/** Reset game  - possible first to 5 and add reset button*/


/** Player and computer scores */
let playerScore = document.getElementById("player-score").innerText;
let computerScore = document.getElementById("computer-score").innerText;

/** Computer random choice */
function generateRandomChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

/** Check winner */
function checkWinner(playerChoice) {
    const computerChoice = generateRandomChoice();
    let result;
    if (playerChoice === computerChoice) {
        result = "draw";
        console.log(result);
        }
        else {
    switch (playerChoice) {
        case "rock":
            result = (computerChoice === "paper" || computerChoice === "spock") ? "lose" : "win";
            break;
        case "paper":
            result = (computerChoice === "scissor" || computerChoice === "lizard") ? "lose" : "win";
            break;
        case "scissor":
            result = (computerChoice === "rock" || computerChoice === "spock") ? "lose" : "win";
            break;
        case "lizard":
            result = (computerChoice === "rock" || computerChoice === "scissor") ? "lose" : "win";
            break;
        case "spock":
            result = (computerChoice === "paper" || computerChoice === "lizard") ? "lose" : "win";
            break;
        }
         if (result === "win") {
            incrementScorePlayer();
        }
        if (result === "lose") {
            incrementScoreComputer();
        }

    /** Show player and computer selection */
    playerDisplay.textContent = `You: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    }
}


/** Player score */
function incrementScorePlayer() {
    let previousScore = parseInt(playerScore);
    let updatedScore = previousScore + 1;
    playerScore = updatedScore;
    document.getElementById("player-score").innerText = updatedScore;
}

/** Computer score */
function incrementScoreComputer() {
    let previousComputerScore = parseInt(computerScore);
    let updatedComputerScore = previousComputerScore + 1;
    computerScore = updatedComputerScore;
    document.getElementById("computer-score").innerText = updatedComputerScore;
}


/**  
 * ReadMe
 * Reset game
 */