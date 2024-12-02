// 12.1.24 - game runs immediately upon page load so that the first game is run without the human choice

let humanScore = 0; 
let computerScore = 0; 

const container = document.querySelector("#container");

const gameProcess = document.createElement("div");
gameProcess.classList.add("content");

    const humanProcess = document.createElement("div");
    humanProcess.classList.add("content");
    gameProcess.appendChild(humanProcess);

    const computerProcess = document.createElement("div");
    computerProcess.classList.add("content");
    gameProcess.appendChild(computerProcess);

    const whoWon = document.createElement("div");
    whoWon.classList.add("content");
    gameProcess.appendChild(whoWon);

    const winner = document.createElement("div");
    winner.classList.add("content");
    gameProcess.appendChild(winner); 

container.appendChild(gameProcess); 

//create function getComputerChoice
function getComputerChoice() {
    //return random number with Math.random that will represent rock, paper, or scissors
    let number = Math.floor(Math.random() * 3); 
        if (number === 0) {
        //console.log(number);
        //change variable resultComputer to a string that says rock
        let resultComputer = "rock"; 
        computerProcess.textContent = "Computer chose " + resultComputer;
        return resultComputer; 

    //if number is between .33 and .65 return "paper"
    } else if (number === 1) {
        //console.log(number);
        let resultComputer = "paper";
        computerProcess.textContent = "Computer chose " + resultComputer;
        return resultComputer; 

    //if number is between .66 and 1 return "scissors"
    } else if (number === 2) {
        //console.log(number);
        let resultComputer = "scissors";
        computerProcess.textContent = "Computer chose " + resultComputer;
        return resultComputer; 
    } 
}

function announceWinner () {
    if (humanScore === 5) {
        winner.textContent = "You are the winner of the game! Congratulations!"
    } else if (computerScore === 5) {
        winner.textContent = "The computer wins this game! Better luck next time!"
    }
}

function updateScore() {
        const humanScoreElement = document.getElementById("humanScore"); // Get the score element
        humanScoreElement.textContent = `Humans: ` + humanScore; // Update the score element's text
        const computerScoreElement = document.getElementById("computerScore");
        computerScoreElement.textContent = `Computers: ` + computerScore; 
        if (humanScore === 5 || computerScore === 5) {
            announceWinner();
        }
      }

    const rockbtn = document.querySelector("#rockbtn");
    rockbtn.addEventListener(`click`, () => {
        humanProcess.textContent = "Human chose rock";
        let computerChoice = getComputerChoice();
        playRound("rock", computerChoice);
        updateScore();
    });
    
    const paperbtn = document.querySelector("#paperbtn");
    paperbtn.addEventListener(`click`, () => {
        humanProcess.textContent = "Human chose paper";
        let computerChoice = getComputerChoice();
        playRound("paper", computerChoice);
        updateScore();
    });

    const scissorsbtn = document.querySelector("#scissorsbtn");
    scissorsbtn.addEventListener(`click`, () => {
        humanProcess.textContent = "Human chose scissors";
        let computerChoice = getComputerChoice();
        playRound("scissors", computerChoice);
        updateScore();
    });


//create a game with 5 rounds using a new function called playGame
// function playGame() {
    // let humanScore = 0; 
    // let computerScore = 0; 

//program will compare human and computer choices 
    function playRound(humanChoice, computerChoice) {
        // your code here!
        if (humanChoice === computerChoice) {
            whoWon.textContent = "It's a draw! The score is the same.";
    
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            whoWon.textContent = "You win!";
            ++humanScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return humanScore; 
        }
        else if (humanChoice === 'paper' && computerChoice ==='rock'){
            whoWon.textContent = "You win!";
            ++humanScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return humanScore; 
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            whoWon.textContent = "You win!";
            ++humanScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return humanScore; 
        }
        else {
            whoWon.textContent = "You lose!";
            ++computerScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return computerScore; 
        }
    }

//create a game with five rounds using a loop
    
    // const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound("", computerSelection);
    
// }

// taken out to stop the game from running before the user has chosen their element
// playGame()




