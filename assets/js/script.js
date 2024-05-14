// Rock paper scissor lizard spock
console.log("hello");

/** DOM */
const choices = ["rock", "paper", "scissor", "lizard", "spock"];
let playerChoice=document.getElementById("")
let computerChoice=document.getElementById("")

/**Event listener */
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
        playerSelections = this.click("aria-label");
            alert(`You clicked ${playerSelections}`);
        })
    }
})

/** Run game */
function runGame(){

}

function computerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playerChoice(){

}

/** Check winner */
function checkWinner(){
    if (playerChoice === computerChoice){
        result = "Draw!";
    }
    else{
        switch(playerChoice){
            case "rock": result = (computerChoice === "scissor" || "lizard") ? "Winner!" : "Loser!"
            break;
            case "paper": result = (computerChoice === "rock" || "spock") ? "Winner!" : "Loser!"
            break;
            case "scissor": result = (computerChoice === "paper" || "lizard") ? "Winner!" : "Loser!"
            break;
            case "lizard": result = (computerChoice === "paper" || "spock") ? "Winner!" : "Loser!"
            break;
            case "spock": result = (computerChoice === "rock" || "scissor") ? "Winner!" : "Loser!"
            break;
        }
    }
}

/** Player score */
function incrementScorePlayer(){
    let oldScorePlayer = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScorePlayer;
}

/** Computer score */
function incrementScoreComputer(){
    let oldScoreComputer = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScoreComputer;
}
