let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const rps = ['Rock','Paper','Scissors'];

function computerPlay(){
    return rps[Math.floor(Math.random()*rps.length)];
}
function game(){
    for (let i=0;i<5;i++){
        playerSelection=prompt('make a choice!');
        playRound(playerSelection,computerSelection);
        console.log(i);
        if (roundWinner == 'player'){
            playerScore = playerScore++;
            console.log(`you win!\n${playerSelection} beats ${computerSelection}.`);
            return('win');
        }
        else if(roundWinner == 'bot'){
            computerScore = computerScore++;
            console.log(`you lose!\n${computerSelection} beats ${playerSelection}.`);
            return('lose');
        }
        else if(roundWinner == 'tie'){
            i-=1;
            console.log('tie game');
            return('tie');
        }
        else{
            i-=1;
            console.log('something went wrong');
            return('neither');
        }
    }
}

function playRound(playerSelection,computerSelection){
    computerSelection=computerPlay().toLowerCase();
    playerSelection=playerSelection.toLowerCase();

    if (computerSelection == playerSelection){
        roundWinner = 'tie';
        return('tie game');
    }
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ){
        roundWinner ='bot';
        return(`you lose!\n${computerSelection} beats ${playerSelection}.`)
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        roundWinner ='player';
        return(`you win!\n${playerSelection} beats ${computerSelection}.`)
    }
    else{
        roundWinner='neither';
        return('something went wrong')
    }

}
console.log(playRound(playerSelection,computerSelection));