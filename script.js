let playerSelection = 'rock';
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const rps = ['Rock','Paper','Scissors'];

function computerPlay(){
    return rps[Math.floor(Math.random()*rps.length)];
}

function playRound(playerSelection,computerSelection){
    computerSelection=computerPlay().toLowerCase();
    playerSelection=playerSelection.toLowerCase();

    if (computerSelection == playerSelection){
        return('tie game');
    }
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ){
        return(`you lose!\n${computerSelection} beats ${playerSelection}.`)
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        return(`you win!\n${playerSelection} beats ${computerSelection}.`)
    }
    else{
        return('something went wrong')
    }

}

// function game(){
//     for (let i=0;i<5;i++){
//         playRound(playerSelection,computerSelection);
//         if (playRound() == win){
            
//         }   
//     }
// }
console.log(playRound(playerSelection,computerSelection));