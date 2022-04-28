let playerSelection ='';
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const rps = ['Rock','Paper','Scissors'];

let buttons = document.querySelectorAll('.button');
let results = document.querySelector('#results-container');

function computerPlay(){
    return rps[Math.floor(Math.random()*rps.length)];
}



function playRound(playerSelection,computerSelection){
    computerSelection=computerPlay().toLowerCase();
    playerSelection=playerSelection.toLowerCase();

    if (computerSelection == playerSelection){
        displayResults('tie game');
    }
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ){
        computerScore++;
        computerScoreCounter();
        displayResults(`you lose!\n${computerSelection} beats ${playerSelection}.`);
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        playerScore++;
        playerScoreCounter();
        displayResults(`you win!\n${playerSelection} beats ${computerSelection}.`);
    }
    else{
        displayResults('something went wrong'); 
    }

}

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const img = button.querySelector('img');
        playerSelection=img.alt.toLowerCase();

        playRound(playerSelection, computerSelection);
        if(playerScore ===5||computerScore===5){
            gameWinner();
        }
    })
});

function playerScoreCounter(){
    let playerScoreDisplay = document.querySelector("#player-score");
    playerScoreDisplay.textContent = playerScore;
}

function computerScoreCounter(){
    let computerScoreDisplay = document.querySelector("#computer-score");
    computerScoreDisplay.textContent = computerScore;
}

function displayResults(str){
    results.textContent = str;
}

function gameWinner(){

    if(playerScore>computerScore){
        alert('You win!');
    }
    else{
        alert('You lost!');
    }
}