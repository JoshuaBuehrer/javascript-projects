

function isValidInput(input) {

  if(input != 'rock' && input != 'paper' && input != 'scissors') {
    return false
  }

  return true

};

function whoWon(player1, player2) {
  if (player1 === player2) {
    return "TIE!";
  }

  if (player1 === "rock" && player2 === "paper") {
    return "Player 2 wins!";
  }

  if (player1 === "paper" && player2 === "scissors") {
    return "Player 2 wins!";
  }

  if (player1 === "scissors" && player2 === "rock") {
    return "Player 2 wins!";
  }

  if (!isValidInput(player1)  || !isValidInput(player2)) {
    return 'HEY NO CHEATING!'
  }
 
  return "Player 1 wins!";
}


module.exports = whoWon;
