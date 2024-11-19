let humanScore = 0; 
let computerScore = 0; 

//create function getComputerChoice
function getComputerChoice() {
    //return random number with Math.random that will represent rock, paper, or scissors
    let number = Math.floor(Math.random() * 2); 
        if (number === 0) {
        //console.log(number);
        //change variable resultComputer to a string that says rock
        let resultComputer = "rock"; 
        console.log("Computer chose " + resultComputer);
        return resultComputer; 

    //if number is between .33 and .65 return "paper"
    } else if (number === 1) {
        //console.log(number);
        let resultComputer = "paper";
        console.log("Computer chose " + resultComputer);
        return resultComputer; 

    //if number is between .66 and 1 return "scissors"
    } else if (number === 2) {
        //console.log(number);
        let resultComputer = "scissors";
        console.log("Computer chose " + resultComputer);
        return resultComputer; 
    } 
}

//create a new function named getHumanChoice
function getHumanChoice() {
    //use prompt to get the user to input a choice
    let x = prompt("rock, paper, scissors, SHOOT!"); 
    //make the prompt input case insensitive
    let resultHuman = x.toLowerCase(); 
    //test that the user's choice is recorded
    console.log("You selected " + resultHuman + ". Good choice!");
    return resultHuman; 
}

//create a game with 5 rounds using a new function called playGame
function playGame() {
    let humanScore = 0; 
    let computerScore = 0; 

//program will compare human and computer choices 
    function playRound(humanChoice, computerChoice) {
        // your code here!
        if (humanChoice === computerChoice) {
            console.log("It's a draw! The score is the same.");
    
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log("You win!");
            ++humanScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return humanScore; 
        }
        else if (humanChoice === 'paper' && computerChoice ==='rock'){
            console.log("You win!");
            ++humanScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return humanScore; 
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log("You win!");
            ++humanScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return humanScore; 
        }
        else {
            console.log("You lose!");
            ++computerScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return computerScore; 
        }
    }

//create a game with five rounds using a loop
    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    }
}

playGame()

    