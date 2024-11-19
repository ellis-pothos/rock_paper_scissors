function playRound(humanChoice, computerChoice) {     
    if (humanChoice === "rock") {
          if (computerChoice === "scissors") {
               console.log("You win!");
              return "You win!";
               //scoreHuman ++1;
          } else if (computerChoice === "paper") {
              console.log("You lose!");
              return "You lose!";
              //scoreComputer ++1;
          } else {
              console.log("It is a draw!");
              return "It is a draw!";
          }
    } else if (humanChoice === "scissors") {
          if (computerChoice === "paper") {
              console.log("You win!");
              return "You win!";
              //scoreHuman ++1
          } else if (computerChoice === "rock") {
              console.log("You lose!");
              return "You lose!";
          } else {
              console.log("It is a draw!");
              return "It is a draw!";
          }
    } else if (humanChoice === "paper") {
          if (computerChoice === "rock") {
              console.log("You win!");
              return "You win!";
          } else if (computerChoice === "scissors") {
              console.log("You lose!");
              return "You lose!";
          } else {
              console.log("It is a draw!");
              return "It is a draw!";

          };
      };
  };
