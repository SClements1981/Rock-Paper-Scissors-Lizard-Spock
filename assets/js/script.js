// rock paper scissor lizard spock

/** DOM */
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Functionality for player and computer scores
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


// Functions checkWinner for computer and player choices
function checkWinner(playerChoice) {
    // Computer random choice
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
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
    }
        // Player and computer choices displayed on screen
        playerDisplay.textContent = `Human: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
    
        // Result of playGame displayed on screen
        resultDisplay.textContent = result;
}
    
    /** Player score */
function incrementScorePlayer() {
    let previousScore = parseInt(playerScore);
    let updatedScore = previousScore + 1;
    playerScore = updatedScore;
    document.getElementById("playerScoreDisplay").innerText = updatedScore;
    }

    /** Computer score */
    function incrementScoreComputer() {
    let previousComputerScore = parseInt(computerScore);
    let updatedComputerScore = previousComputerScore + 1;
    computerScore = updatedComputerScore;
    document.getElementById("computerScoreDisplay").innerText = updatedComputerScore;
    }
