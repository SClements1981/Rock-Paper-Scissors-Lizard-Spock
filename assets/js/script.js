// Rock paper scissor lizard spock
console.log("hello");

/** DOM */
const choices = ["rock", "paper", "scissor", "lizard", "spock"];

/** Reset game  - possible first to 5 and add reset button*/
function runGame(){
}

/** New mentor code */
let playerScore = document.getElementById("player-score").innerText
let computerScore = document.getElementById("computer-score").innerText

/** Computer random choice */
function generateRandomChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}


/** Check winner */
function checkWinner(playerChoice){
    const computerChoice = generateRandomChoice()
    let result;
    console.log("this is player choice", playerChoice);
    console.log(computerChoice);
    if (playerChoice === computerChoice){
        result = "Draw!"; 
        console.log(result);
        return;
    }
    switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors" || "rock") ? "win" : "lose"
            break;
            case "paper":
                result = (computerChoice === "scissor" || "lizard") ? "win" : "lose"
            break;
            case "scissor":
                result = (computerChoice === "rock" || "spock") ? "win" : "lose"
            break;
            case "lizard":
                result = (computerChoice === "rock" || "scissor") ? "win" : "lose"
            break;
            case "spock":
                result = (computerChoice === "paper" || "lizard") ? "win" : "lose"
            break;
    }
    console.log(result);
}

/** Player score */
function incrementScorePlayer(){
    let previousScore = parseInt(playerScore);
    let updatedScore = previousScore +1;
    console.log(updatedScore)
    playerScore = updatedScore
    document.getElementById("player-score").innerText= updatedScore
}

/** Computer score */
function incrementScoreComputer(){
    let previousComputerScore = parseInt(computerScore);
    let updatedComputerScore = previousComputerScore +1;
    console.log(updatedScore)
    computerScore = updatedScore
    document.getElementById("computer-score").innerText= updatedScore
}
