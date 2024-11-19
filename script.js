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


//program will compare human and computer choices 
    function playRound(humanChoice, computerChoice) {
        // your code here!
        if (humanChoice === computerChoice) {
            console.log("It's a draw! The score is the same.");
            //return "It's a draw!"
    
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log("You win!");
            //return "You win!"
            ++humanScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return humanScore; 
        }
        else if (humanChoice === 'paper' && computerChoice ==='rock'){
            console.log("You win!");
            //return "You win!"
            ++humanScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return humanScore; 
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log("You win!");
            //return "You win!"
            ++humanScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return humanScore; 
        }
        else {
            console.log("You lose!");
            //return "You lose!"
            ++computerScore; 
            console.log("The score is " + humanScore + " for humans and " + computerScore + " for computers!")
            return computerScore; 
        }
    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

