// function diceGame() {
//
// var randomNumber1 = Math.floor((Math.random(randomNumber1) * 6 + 1));
// var randomNumber2 = Math.floor((Math.random(randomNumber2) * 6 + 1));
//
// var player1= "images/dice" + randomNumber1 + ".png";
// var player2= "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll(".dice .img1").setAttribute("src", player1);
// document.querySelectorAll(".dice .img1").setAttribute("src", player2);
//
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 1 Wins";
// } else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins";
// } else {
//   document.querySelector("h1").tinnerHTML = "Draw";
// }
//
// }
//
// console.log(diceGame());

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
// identifying the left dice image to target and call the random number + matched dice pic
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// identifying the right dice image to target and call the random number + matched dice pic
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Kailynn Wins!";
}
else if (randomNumber2 > randomNumber1) { //if player 2 wins
  document.querySelector("h1").innerHTML = "Kam Wins! 🚩";
}
else { //if a tie ...
  document.querySelector("h1").innerHTML = "Draw!";
}
