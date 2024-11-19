let humanScore = 0; 
let computerScore = 0; 

//create function getComputerChoice
function getComputerChoice() {
    //return random number with Math.random that will represent rock, paper, or scissors
    let number = Math.random(); 
    //if y is between 0 and .32 return "rock"
    if (number >= 0 && number <= .32) {
        //console.log(number);
        //change variable resultComputer to a string that says rock
        let resultComputer = "rock"; 
        console.log("Computer chose " + resultComputer);

    //if number is between .33 and .65 return "paper"
    } else if (number >= .33 && number <= .65) {
        //console.log(number);
        let resultComputer = "paper";
        console.log("Computer chose " + resultComputer);

    //if number is between .66 and 1 return "scissors"
    } else if (number >= .66 && number < 1) {
        //console.log(number);
        let resultComputer = "scissors";
        console.log("Computer chose " + resultComputer);
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
}

//"Step 5: Write the logic to play a single round" 
//program will compare human and computer choices 
function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win!");
    }
    else if (humanChoice === 'paper' && computerChoice ==='rock'){
        console.log("You win!");
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log("You win!");
    }
    else if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }
    else {
        console.log("You lose!");
    }
  }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

