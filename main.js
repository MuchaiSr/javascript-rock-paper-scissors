function playGame() {
    function getComputerChoice () {
    let randomValue = Math.random();

    if (randomValue >= 0 && randomValue <= 0.3) {
        let value = "Rock";
        return value;
    } else if (randomValue > 0.3 && randomValue <= 0.6) {
        let value = "Paper";
        return value;
    } else if (randomValue > 0.6 && randomValue < 1) {
        let value = "Scissors";
        return value;
    }
}

let computerSelection = getComputerChoice();
console.log(computerSelection);

function getHumanChoice () {
    let textValue = prompt("Rock, Paper or Scissors? ");

    if (textValue === null) {
        alert ("Canceled");
    }

    let answer = (textValue.at(0).toUpperCase() + textValue.slice(1).toLowerCase());
    let alertMessage = `You have entered ${answer}`;
    
    if (answer === "Rock") {
        alert (alertMessage);
        return answer;
    } else if (answer === "Paper") {
        alert (alertMessage);
        return answer;
    } else if (answer === "Scissors") {
        alert (alertMessage);
        return answer;
    } else if (answer === "" || answer != ("Rock" || "Paper" || "Scissors")) {
        alert ("Invalid Choice, try again.");
        return "Invalid Choice";
    }

}

let humanSelection = getHumanChoice();
console.log(humanSelection);

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) { 
            let draw = `Draw! ${humanChoice} is the same as ${computerChoice}.` 

            alert (draw);
            return humanScore === computerScore;
        } 
    
        if (humanChoice === "Rock" && computerChoice === "Scissors") {
            let newHumanScore = ++humanScore; 
            let win = `You Win! ${humanChoice} beats ${computerChoice}.
        Your new score is ${newHumanScore}.`

            alert (win); 

        } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
            let newComputerScore = ++computerScore;
            let lose = `You lose! ${computerChoice} beats ${humanChoice}.
        The Computer's new score is ${newComputerScore}`

            alert (lose);
        }
         if (humanChoice === "Scissors" && computerChoice === "Paper") {
            let newHumanScore = ++humanScore; 
            let win = `You Win! ${humanChoice} beats ${computerChoice}.
        Your new score is ${newHumanScore}.`

             alert (win);

        } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            let newComputerScore = ++computerScore;
            let lose = `You lose! ${computerChoice} beats ${humanChoice}.
        The Computer's new score is ${newComputerScore}`

            alert (lose);  
        }
         if (humanChoice === "Paper" && computerChoice === "Rock") { 
            let newHumanScore = ++humanScore; 
            let win = `You Win! ${humanChoice} beats ${computerChoice}.
        Your new score is ${newHumanScore}.`

            alert (win);

        } else if (computerChoice === "Paper" && humanChoice === "Rock") { 
            let newComputerScore = ++computerScore;
            let lose = `You lose! ${computerChoice} beats ${humanChoice}.
        The Computer's new score is ${newComputerScore}`
        
            alert (lose); 
         }
    
    }
    
    let result = playRound(humanSelection, computerSelection);
    console.log(result);
}

playGame();
playGame();
playGame();
playGame();
playGame();