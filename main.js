let humanScore = 0;
let computerScore = 0;
const maxScore = 5;

const buttons = document.querySelectorAll("button");
const humanScoreElement = document.getElementById("humanScore");
const computerScoreElement = document.getElementById("computerScore");
const resultMessageElement = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);

    humanScoreElement.innerText = humanScore;
    computerScoreElement.innerText = computerScore;

    if (humanScore === maxScore) {
      humanScoreElement.innerText = 0;
      computerScoreElement.innerText = 0;
      alert("Congratulations! You win the game!");
    } else if (computerScore === maxScore) {
      humanScoreElement.innerText = 0;
      computerScoreElement.innerText = 0;
      alert("Game over! You lost.");
    }
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultMessageElement.innerText = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessageElement.innerText = `You win! ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}.`;

    humanScore++;
  } else {
    resultMessageElement.innerText = `You lose! ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}.`;

    computerScore++;
  }
}
