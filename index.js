function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock"
    } else if (randomNumber === 1) {
        return "paper"
    } else if (randomNumber === 2) {
        return "scissors"
    }
}

let userInput = prompt("Please enter your choice");

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput=== "scissors") {
        return true
    } else {
        return "This is not a valid input."
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "This round is a tie!"
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!"
        } else {
            return "You lose! Scissors beat paper!"
        }
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors!"
        } else {
            return "You lose! Paper beats rock!"
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beat paper!"
        } else {
            return "You lose! Rock beats scissors!"
        }
    }
}

const playerSelection = userInput;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    }
    console.log(playRound());
}
game();
