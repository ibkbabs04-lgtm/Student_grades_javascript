 let playerScore = 0;
 let computerScore = 0;
 let options = ["rock", "paper", "scissors"];
 let computerChoice = options[Math.random(options)];
 let playerOption = prompt("Choose rock, paper, or scissors:").toLowerCase();

if (computerChoice === "rock") {
    console.log("Computer chose rock");
}
else if (computerChoice === "paper") {
    console.log("Computer chose paper");
}
else if (computerChoice === "scissors") {
    console.log("Computer chose scissors");
}

if (playerOption === computerChoice) {
    console.log("It's a tie!");
}
else if (playerOption === "rock" && computerChoice === "scissors" || 
         playerOption === "paper" && computerChoice === "rock" || 
         playerOption === "scissors" && computerChoice === "paper") {
    console.log("You win!");
    playerScore++;
}
else {
    console.log("Computer wins!");
    computerScore++;
}

