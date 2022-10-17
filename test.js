const playerSelection = () => prompt("Rock, paper or scissors?" );

const computerSelection = function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * options.length);
    return(options[random]);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return("Tie! Try again.");
    } else if (playerSelection === "rock"  && computerSelection === "paper"){
        return("You Lose! Paper beats Rock");
    } else if (playerSelection === "paper"  && computerSelection === "scissors"){
        return("You Lose! Scissors beats Paper");
    } else if (playerSelection === "scissors"  && computerSelection === "rock") {
        return("You Lose! Rock beats Scissors");
    } else if (playerSelection === "rock"  && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors");
    } else if (playerSelection === "paper"  && computerSelection === "rock") {
        return("You Win! Paper beats Rock");
    } else if (playerSelection === "scissors"  && computerSelection === "paper") {
        return("You Win! Scissors beats Paper");
    }
}

function game() {
    let user = 0;
    let cpu = 0;
    for (let i = 0; i < 5; i++) {
        const rounds = playRound(playerSelection(), computerSelection());
        console.log(rounds);
        if (rounds === "Tie! Try again.") {
            i -= 1;
        } else if (rounds === "You Lose! Paper beats Rock" ||
        rounds === "You Lose! Scissors beats Paper" ||
        rounds === "You Lose! Rock beats Scissors") {
            cpu += 1;
        } else {
            user += 1;
        }
        console.log(`User Score: ${user}, Computer Score: ${cpu}`);

    }
    return (user > cpu) ? console.log("You won!") : console.log("You lost!");
}

game();