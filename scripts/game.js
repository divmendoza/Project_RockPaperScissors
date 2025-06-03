const playerChoices = ["/images/youRock.png", "/images/youPaper.png", "/images/youSci.png"];
const opponentChoices = ["/images/oppRock.png", "/images/oppPaper.png", "/images/oppSci.png"];
const youScore = ["/images/you0.png", "/images/you1.png", "/images/you2.png", "/images/you3.png"];
const oppScore = ["/images/opp0.png", "/images/opp1.png", "/images/opp2.png", "/images/opp3.png"];

const getter = document.querySelector('.player img');
const getter2 = document.querySelector('.opponent img');
const getter3 = document.getElementById('scoreBoard1');
const getter4 = document.getElementById('scoreBoard2');
const getter5 = document.getElementById('round');

let playerScore = 0;
let computerScore = 0;
let round = 1;
let playerRoundsWon = 0;
let computerRoundsWon = 0;

function process(choice) {
    const player = choice;
    const computer = Math.floor(Math.random() * 3);

    getter.src = playerChoices[player];
    getter2.src = opponentChoices[computer];

    if ((player === 0 && computer === 2) ||
        (player === 1 && computer === 0) ||
        (player === 2 && computer === 1)) {
        playerScore++;
        getter3.src = youScore[Math.min(playerScore, 2)];
    } else if (player === computer) {
        // Draw
    } else {
        computerScore++;
        getter4.src = oppScore[Math.min(computerScore, 2)];
    }

    if (playerScore === 3 || computerScore === 3) {
        if (playerScore === 3) {
            playerRoundsWon++;
        } else {
            computerRoundsWon++;
        }

        if (playerRoundsWon === 2) {
            setTimeout(() => {
                alert("You Win the Match!");
                reset();
            }, 500);
            return;
        } else if (computerRoundsWon === 2) {
            setTimeout(() => {
                alert("You Lose the Match!");
                reset();
            }, 500);
            return;
        }

        playerScore = 0;
        computerScore = 0;
        getter3.src = youScore[0];
        getter4.src = oppScore[0];

        round++;
        getter5.textContent = round;
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerRoundsWon = 0;
    computerRoundsWon = 0;
    round = 1;
    getter3.src = youScore[0];
    getter4.src = oppScore[0];
    getter5.textContent = round;
}
