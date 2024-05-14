// Rock paper scissor lizard spock
console.log("hello");
 
const choices = ["rock", "paper", "scissor", "lizard", "spock"];

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
        if playerSelections = this.Attribute("aria-label");
            alert(`You clicked ${playerSelections}`);
        })
    }
})


function runGame(){

}

function computerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playerChoice(){

}

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

function calculateCorrectAnswer(){

}

function incrementScore(){

}
