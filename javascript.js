const choice = ['Rock', 'Paper', 'Scissors'];
playGame();


function playGame() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let roundsPlayed = 0;

    while (roundsPlayed < 5) {
        const playerSelection = prompt("Please enter 'rock', 'paper' or 'scissors' to choose your selection");

        // Check if player's selection is valid
        if (isValidSelection(playerSelection)) {
            const computerSelection = getComputerChoice();
            const roundResult = playRound(playerSelection, computerSelection, playerWinCount, computerWinCount);

            // Update win counts based on round result
            playerWinCount = roundResult.playerWinCount;
            computerWinCount = roundResult.computerWinCount;

            console.log(roundResult.message);
            roundsPlayed++;
        } else {
            alert("Please enter a valid choice");
        }
    }

    console.log(`Player wins: ${playerWinCount}, Computer wins: ${computerWinCount}`);

    //Determine the winner between the player and the computer after five rounds, or ascertain if the game ends in a draw.
    if (playerWinCount === computerWinCount) {
        console.log("Following 5 rounds of gameplay, the result is a tie.");
    } else if (playerWinCount > computerWinCount) {
        console.log("Following 5 rounds of gameplay, you win!");
    } else {
        console.log("Following 5 rounds of gameplay, computer wins!");
    }

    // Optionally, return the win counts
    return { playerWinCount, computerWinCount };
}

// Helper function to check if the player's selection is valid
function isValidSelection(selection) {
    return selection && ['rock', 'paper', 'scissors'].includes(selection.toLowerCase());
}


//Function for Computer Choice
function getComputerChoice() {
    const computerChoice = choice[randomIndex()];
    return computerChoice;
}

// Function to calculate random index for computer choice
function randomIndex() {
    const index = Math.floor(Math.random() * 3);
    return index;
}

function playRound(playerSelection, computerSelection, playerWinCount, computerWinCount) {
    const playerChoice = playerSelection.toLowerCase();
    
    if(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        return {
            message: "Please enter a valid choice",
            playerWinCount: playerWinCount,
            computerWinCount: computerWinCount
        };
    } else if (playerChoice === computerSelection.toLowerCase()) {
        return {
            message:  'It\'s a tie!',
            playerWinCount: playerWinCount,
            computerWinCount: computerWinCount
        };
    } else if (
        (playerChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerChoice === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerChoice === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        // Increment player's win count
        playerWinCount++;

        return {
            message: `You Win! ${playerChoice} beats ${computerSelection}`,
            playerWinCount: playerWinCount,
            computerWinCount: computerWinCount
        };
    } else {
        // Increment computer's win count
        computerWinCount++;

        return {
            message: `You Lose! ${computerSelection} beats ${playerChoice}`,
            playerWinCount: playerWinCount,
            computerWinCount: computerWinCount
        };
    }   
}
  

  