let playerSelection ='';
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const rps = ['Rock','Paper','Scissors'];

let buttons = document.querySelectorAll('.button');

function computerPlay(){
    return rps[Math.floor(Math.random()*rps.length)];
}



function playRound(playerSelection,computerSelection){
    computerSelection=computerPlay().toLowerCase();
    playerSelection=playerSelection.toLowerCase();

    if (computerSelection == playerSelection){
        console.log('tie game');
    }
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ){
        computerScore++;
        console.log(`you lose!\n${computerSelection} beats ${playerSelection}.`);
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        playerScore++;
        console.log(`you win!\n${playerSelection} beats ${computerSelection}.`);
    }
    else{
        console.log('something went wrong'); 
    }

}

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const img = button.querySelector('img');
        playerSelection=img.alt.toLowerCase();

        playRound(playerSelection, computerSelection);
        console.log(playerScore);
        console.log(computerScore);
    })
});

function gameWinner(){

    if(playerScore>computerScore){
        alert('You win!');
    }
    else{
        alert('You lost!');
    }
}