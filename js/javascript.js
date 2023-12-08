const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;
let roundWinner = 0;
function consoleLog(x){
    return console.log(x);
}

function getElement(x){
    return document.getElementById(x);
}

const playerScoreCounter = getElement("playerScore");
const computerScoreCounter = getElement("computerScore");
const rockButton = getElement("rockButton");
const paperButton = getElement("paperButton");
const scissorsButton = getElement("scissorsButton");

function getComputerChoice(){
    let selected = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return selected;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        //consoleLog("It's a TIE!");
        return "TIE";
    }else if(checkWinner(playerSelection, computerSelection)){
        return "PLAYER";
    }else{
        return "COMPUTER";
    }
}

function game(playerSelection){
    alert(playerSelection);
    if(playRound(playerSelection, getComputerChoice())=="TIE"){
        alert("It's a TIE!");
    }else if(playRound(playerSelection, getComputerChoice())=="PLAYER"){
        alert("Player Won!");
        playerScore++
    }else{
        alert("Computer Won!");
        computerScore++;
    }
    alert(`Player: ${playerScore} | Computer Score: ${computerScore}`);
    playerScoreCounter.textContent = `Player: ${playerScore}`;
    computerScoreCounter.textContent = `Computer: ${computerScore}`;
}

while(playerScore < 5 && computerScore < 5){
    let choice = prompt("ROCK | PAPER | SCISSORS").toLowerCase().toUpperCase();
    if(choice != '' || choice != null || choice != undefined){
        if(choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS"){
            game(choice);
        }else{
            alert("Invalid Input!");
        }
    }
}

function updateScoreMessage(roundWinner, playerScore, computerScore){
    alert(roundWinner);
}

function checkWinner(x, y){
    if((x === "ROCK" && y === "SCISSORS") ||
        (x === "PAPER" && y === "ROCK") ||
        (x === "SCISSORS" && y === "PAPER")){
        return true;
    }else{
        return false;
    }
}
    