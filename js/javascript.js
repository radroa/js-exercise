const CHOICES = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;
let roundWinner = 0;
let playerSelectionDisplay;
let computerSelectionDisplay;
function consoleLog(x){
    return console.log(x);
}

function getElement(x){
    return document.getElementById(x);
}

const playerScoreCounter = getElement("playerScore");
const playerChoice = getElement("playerChoice");
const computerScoreCounter = getElement("computerScore");
const computerChoice = getElement("computerChoice");
const rockButton = getElement("rockButton");
const paperButton = getElement("paperButton");
const scissorsButton = getElement("scissorsButton");
const restartButton = getElement("restartButton");
const subtitle = getElement("subtitle");

function getComputerChoice(){
    let selected = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    return selected;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "TIE";
    }else if(checkWinner(playerSelection, computerSelection)){
        return "PLAYER";
    }else{
        return "COMPUTER";
    }
}

function game(playerSelection){
    let computerSelection = getComputerChoice();
    if(playRound(playerSelection, computerSelection)=="TIE"){
        roundWinner = "It's a Tie!";
    }else if(playRound(playerSelection, computerSelection)=="PLAYER"){
        roundWinner = "Player Won This Round";
        playerScore++
    }else{
        roundWinner = "Computer Won This Round";
        computerScore++;
    }
    updateSelectionDisplay(playerSelection, computerSelection);
    updateScoreMessage(roundWinner, playerScore, computerScore, playerSelectionDisplay, computerSelectionDisplay);
    if(playerScore == 5 || computerScore == 5){
        playerScore == 5 ? updateScoreMessage("Player won the game!", playerScore, computerScore) : updateScoreMessage("Computer won the game!", playerScore, computerScore);
        playerScore = 0;
        computerScore = 0;
        rockButton.style.display = "none";
        paperButton.style.display = "none";
        scissorsButton.style.display = "none";
        restartButton.style.display = "block";
        playerChoice.style.display = "none";
        computerChoice.style.display = "none";
    }
}

function restart(){
    playerScore = 0;
    computerScore = 0;
    updateScoreMessage("Score 5 points to win!", playerScore, computerScore, "?", "?");
    rockButton.style.display = "block";
    paperButton.style.display = "block";
    scissorsButton.style.display = "block";
    restartButton.style.display = "none";
    playerChoice.style.display = "block";
    computerChoice.style.display = "block";
}

// while(playerScore < 5 && computerScore < 5){
//     let choice = prompt("ROCK | PAPER | SCISSORS").toLowerCase().toUpperCase();
//     if(choice != '' || choice != null || choice != undefined){
//         if(choice == "ROCK" || choice == "PAPER" || choice == "SCISSORS"){
//             game(choice);
//         }else{
//             alert("Invalid Input!");
//         }
//     }
// }

function updateSelectionDisplay(playerSelection, computerSelection){
    if(playerSelection == "ROCK"){
        playerSelectionDisplay = "✊";
    }else if(playerSelection == "PAPER"){
        playerSelectionDisplay = "✋";
    } else {
        playerSelectionDisplay = "✌";
    }
    if(computerSelection == "ROCK"){
        computerSelectionDisplay = "✊";
    }else if(computerSelection == "PAPER"){
        computerSelectionDisplay = "✋";
    } else {
        computerSelectionDisplay = "✌";
    }
}

function updateScoreMessage(roundWinner, playerScore, computerScore, playerSelectionDisplay, computerSelectionDisplay){
    playerScoreCounter.textContent = `Player: ${playerScore}`;
    computerScoreCounter.textContent = `Computer: ${computerScore}`;
    subtitle.textContent = `${roundWinner}!`;
    playerChoice.textContent = `${playerSelectionDisplay}`;
    computerChoice.textContent = `${computerSelectionDisplay}`;
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
    