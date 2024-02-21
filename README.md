# Project-Rock-Paper-Scissors

# Rock Paper Scissors Game

## Overview

This is a simple implementation of the classic game Rock Paper Scissors using JavaScript. The game allows the player to compete against the computer in a series of rounds, each round consisting of selecting one of the three choices: rock, paper, or scissors.

How to Play
Open the index.html file in your web browser.
The game will prompt you to enter your choice for each round. Enter 'rock', 'paper', or 'scissors' in the prompt.
After five rounds, the game will determine the winner between the player and the computer based on the total number of wins. If both have an equal number of wins, the game will be declared a tie. The winner will be displayed in the console.
Game Outcome
The winner of the game (player or computer) will be recorded in the console after the completion of five rounds.

Game Logic
The game logic is implemented in the javascript.js file.
The playGame() function orchestrates the gameplay by executing rounds, prompting the player for input, and determining the winner.
The playRound() function handles the logic for each round, comparing the player's choice with the computer's choice to determine the winner.
The getComputerChoice() function randomly selects the computer's choice (rock, paper, or scissors) for each round.
The isValidSelection() function validates the player's input to ensure it's one of the valid choices.
