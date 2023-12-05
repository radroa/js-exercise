const choice = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = ``;
let computerScore = ``;

function consoleLog(x){
    return console.log(x);
}

function getElement(x){
    return document.getElementById(x);
}

function getComputerChoice(){
    let selected = choice[Math.floor(Math.random() * choice.length)];
    return selected;
}

let computerSelection = getComputerChoice();
const playerSelection = "ROCK";
consoleLog("Player: " + playerSelection + " Comuputer: " + computerSelection)

function playRound(playerSelect, computerSelection){
    if(playerSelect === computerSelection){
        consoleLog("It's a TIE!");
    }else if(
        (playerSelect === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelect === "PAPER" && computerSelection === "ROCK") ||
        (playerSelect === "SCISSORS" && computerSelection === "PAPER")){
        consoleLog("Player Won!");
    }else if(
        (computerSelection === "ROCK" && playerSelect === "SCISSORS") ||
        (computerSelection === "PAPER" && playerSelect === "ROCK") ||
        (computerSelection === "SCISSORS" && playerSelect === "PAPER")){
            consoleLog("Computer Won!");
    }
}

playRound(playerSelection, computerSelection);

function game(){

}