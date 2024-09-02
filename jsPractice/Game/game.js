//helper function to generate computer move
// function computerMove() {
//   let randomNum = Math.random();
//   let move = "";
//   if (randomNum >= 0 && randomNum < 1 / 3) {
//     move = "Rock";
//   } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
//     move = "Paper";
//   } else {
//     move = "Scissors";
//   }
//   return move;
// }

// //helper funtion to update score htmlelement
// function updateScore() {
//   document.querySelector(
//     "#totalScores"
//   ).innerHTML = `Wins: ${gameScores.wins}, Losses: ${gameScores.losses}, Ties: ${gameScores.ties}`;
// }

// //use localStorage to store the updated scores, as localStorage only stores string, so call JSON.parse to conver it back to gameScores object.
// //also, if gameScores is Null, give a default value, because when reset, the obj is removed from localStorage
// const gameScores = JSON.parse(localStorage.getItem("score")) || {
//   wins: 0,
//   losses: 0,
//   ties: 0,
// };

// updateScore();

// function playGame(usermove) {
//   const move = computerMove();
//   let result = "";

//   if (usermove === "Rock") {
//     if (move === "Rock") {
//       result = "Tie.";
//     } else if (move === "Paper") {
//       result = "You lose.";
//     } else {
//       result = "You win.";
//     }
//   } else if (usermove === "Paper") {
//     if (move === "Rock") {
//       result = "You win.";
//     } else if (move === "Paper") {
//       result = "Tie.";
//     } else {
//       result = "You lose.";
//     }
//   } else if (usermove === "Scissors") {
//     if (move === "Rock") {
//       result = "You lose.";
//     } else if (move === "Paper") {
//       result = "You win.";
//     } else {
//       result = "Tie.";
//     }
//   }

//   if (result === "You win.") {
//     gameScores.wins += 1;
//   } else if (result === "You lose.") {
//     gameScores.losses += 1;
//   } else if (result === "Tie.") {
//     gameScores.ties += 1;
//   }

//   // when store gameScores object into localStorage, need to call JSON.strengify to convert obj into string for storage.
//   const jsStr = JSON.stringify(gameScores);
//   localStorage.setItem("score", jsStr);

//   updateScore();
//   document.querySelector("#roundResult").innerHTML = `${result}`;
//   document.querySelector(
//     "#moves"
//     //).innerHTML = `You picked ${usermove} - Computer picked ${move}`;
//   ).innerHTML = ` You picked
//             <img
//               src="../images/move-icon-${usermove}.png"
//               class="moveIcon"
//               alt="rock icon"
//             />
//             Computer picked<img
//               src="../images/move-icon-${move}.png"
//               class="moveIcon"
//               alt="rock icon"
//             />`;
// }

// function resetGame() {
//   gameScores.wins = 0;
//   gameScores.losses = 0;
//   gameScores.ties = 0;
//   document.querySelector("#roundResult").innerHTML = "";
//   document.querySelector("#moves").innerHTML = "";

//   //remove old storage record in case refreshing page
//   localStorage.removeItem("score");
//   updateScore();
// }
