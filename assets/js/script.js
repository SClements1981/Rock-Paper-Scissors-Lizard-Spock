// Rock paper scissor lizard spock

const choice = ["rock", "paper", "scissor", "lizard", "spock"];
const playerDisplay = document.getElementById("player-image");
const computerDisplay = document.getElementById("computer-image");
const result = document.getElementsByClassName("result");

function runGame(playerChoice) {

    const computerChoice = choice[Math.floor(Math.random() * 5)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Draw!"
    }
    else {
        switch(playerChoice){
            case "rock" : result = (computerChoice === "scissors", "lizard") ? "Winner!" : "Loser!"
            break;
            case "paper" : result = (computerChoice === "rock", "spock") ? "Winner!" : "Loser!"
            break;
            case "scissor" : result = (computerChoice === "paper", "lizard") ? "Winner!" : "Loser!"
            break;
            case "lizard" : result = (computerChoice === "paper", "spock") ? "Winner!" : "Loser!"
            break;
            case "spock" : result = (computerChoice === "rock", "scissor") ? "Winner!" : "Loser!"
            break;
        }
    }

    playerDisplay.textContent = `player-image: ${playerChoice}`;
    computerDisplay.textContent = `computer-image: ${computerChoice}`;
    result.textContent = result;

function calculateCorrectAnswer() {

}

function incrementHumanScore() {

}

function incrementComputerScore() {

}