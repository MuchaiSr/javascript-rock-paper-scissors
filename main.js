    const div1 = document.createElement("div");
    document.body.appendChild(div1);
    const rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    const paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    div1.appendChild(rockButton);
    div1.appendChild(paperButton);
    div1.appendChild(scissorsButton);
    const displayDiv = document.querySelector(".display");
    const unorderedList = document.querySelector("ul");

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

    async function getHumanChoice() {
        return new Promise ((resolve, reject) => {
            div1.addEventListener("click", (event) => {
                if (event.target === rockButton) {
                    resolve("Rock");
                } else if (event.target === paperButton) {
                    resolve("Paper");
                } else if (event.target === scissorsButton) {
                    resolve ("Scissors");
                }
            });
        });
    }
    
    async function clickButton() {
        const humanSelection = await getHumanChoice();
        console.log(humanSelection);
        return humanSelection;
    }
    
        let humanScore = 0;
        let computerScore = 0;
    
        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice) { 
                let draw = `Draw! ${humanChoice} is the same as ${computerChoice}.`;
                const list = document.createElement("li");
                list.textContent = draw;
                unorderedList.appendChild(list);
                return draw;
            } 
        
            if (humanChoice === "Rock" && computerChoice === "Scissors") {
                let newHumanScore = ++humanScore; 
                let win = `You Win! ${humanChoice} beats ${computerChoice}.
            Your new score is ${newHumanScore}.`;
                const list = document.createElement("li");
                list.textContent = win;
                unorderedList.appendChild(list);
                return win;
            
            } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
                let newComputerScore = ++computerScore;
                let lose = `You lose! ${computerChoice} beats ${humanChoice}.
            The Computer's new score is ${newComputerScore}`;
                const list = document.createElement("li");
                list.textContent = lose;
                unorderedList.appendChild(list);
                return lose;
            }
             if (humanChoice === "Scissors" && computerChoice === "Paper") {
                let newHumanScore = ++humanScore; 
                let win = `You Win! ${humanChoice} beats ${computerChoice}.
            Your new score is ${newHumanScore}.`;
                const list = document.createElement("li");
                list.textContent = win;
                unorderedList.appendChild(list);
                return win;
    
            } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
                let newComputerScore = ++computerScore;
                let lose = `You lose! ${computerChoice} beats ${humanChoice}.
            The Computer's new score is ${newComputerScore}`;
                const list = document.createElement("li");
                list.textContent = lose;
                unorderedList.appendChild(list);
                return lose;  
            }
             if (humanChoice === "Paper" && computerChoice === "Rock") { 
                let newHumanScore = ++humanScore; 
                let win = `You Win! ${humanChoice} beats ${computerChoice}.
            Your new score is ${newHumanScore}.`;
                const list = document.createElement("li");
                list.textContent = win;
                unorderedList.appendChild(list);
                return win;
    
            } else if (computerChoice === "Paper" && humanChoice === "Rock") { 
                let newComputerScore = ++computerScore;
                let lose = `You lose! ${computerChoice} beats ${humanChoice}.
            The Computer's new score is ${newComputerScore}`;
                const list = document.createElement("li");
                list.textContent = lose;
                unorderedList.appendChild(list);
                return lose; 
             }
        
        }

        async function playGame() {
            for (let i = 1; i < 16; i++) {
                const humanSelection = await clickButton();
                let computerSelection = getComputerChoice();
                alert (`The computer picked ${computerSelection}`);
                console.log(computerSelection);
                playRound(humanSelection, computerSelection);

                if (humanScore === 5 & computerScore < 5) {
                    const heading3 = document.createElement("h3");
                    heading3.textContent = "YOU WIN!!!";
                    unorderedList.appendChild(heading3);
                    break;
                } else if (computerScore === 5 & humanScore < 5) {
                    const heading3 = document.createElement("h3");
                    heading3.textContent = "YOU LOSE!!!";
                    unorderedList.appendChild(heading3);
                    break;
                } else if ( computerScore === 4 & humanScore === 4) {
                    const heading3 = document.createElement("h3");
                    heading3.textContent = "DRAW!!!";
                    unorderedList.appendChild(heading3);
                    break;
                }
            }
        }

        playGame();