$(document).ready(function() {

var qnList = [
  {qn: "24 Sussex Drive is the official residency of the Prime Minister of which country?", choice1: "Canada", choice2: "Scotland", ans:"1",},
  {qn: "In what year was the first laser built?", choice1: "1960", choice2: "1970", ans:"1",},
  {qn: "How many toes does a dog have?", choice1: "10", choice2: "18", ans:"2",},
  {qn: "Emma Watson of Harry Potter fame, was born in which country?", choice1: "France", choice2: "England", ans:"1",},
  {qn: "California has which city as its capital?", choice1: "Portland", choice2: "Sacremento", ans:"2",},
  {qn: "How is the number 5 written in Roman numerals?", choice1: "X", choice2: "V", ans:"2",},
  {qn: "What international news magazine became an online published magazine only in January 2013?", choice1: "Newsweek", choice2: "The Economist", ans:"1",},
  {qn: "In Darts, how much is the Outer Bull worth?", choice1: "25", choice2: "28", ans:"1",},
  {qn: "How many keys on a standard piano?", choice1: "88", choice2: "86", ans:"1",},
  {qn: "What is the captial of Myanmar?", choice1: "Yangon", choice2: "Naypyidaw", ans:"2",},
  {qn: "The cross between a lion and a tiger is called?", choice1: "Tion", choice2: "Liger", ans:"2",},
  {qn: "Which side of a boat is 'port'?", choice1: "Left", choice2: "Right", ans:"1",},
  {qn: "How many stars are on the EU flag?", choice1: "12", choice2: "8", ans:"1",},
  {qn: "In Scrabble how many letters have a value of 2?", choice1: "2", choice2: "4", ans:"1",},
  {qn: "What's the worlds most popular Non Alcoholic Drink?", choice1: "Coke", choice2: "Coffee", ans:"2",},
  {qn: "Which French car design achieved fame in motoring circles for his 'double chevron' gear and logo?", choice1: "Renault", choice2: "Citroen", ans:"2",},
  {qn: "People born on the 1st March have which sign of the Zodiac??", choice1: "Leo", choice2: "Pisces", ans:"2",},
  {qn: "What replaced the iron in the board game Monopoly?", choice1: "Cat", choice2: "Dog", ans:"1",},
  {qn: "Which is the largest country in the world?", choice1: "China", choice2: "Russia", ans:"2",},
];

var indexOfQns = qnList.length - 1; //calculating index number of question

var randomiseQn = function(min, max) { // randomiser function
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



//selecting a random qn

var indexNum = randomiseQn(0, indexOfQns);
var question = qnList[indexNum]; // choosing a random question between 0 and question index

//---

// splice and load new question

var loadNewQuestion = function(){
  qnList.splice(indexNum, 1);
  indexOfQns = qnList.length - 1;
  indexNum = randomiseQn(0, indexOfQns);
  question = qnList[indexNum];
  $('#question > p').html(question.qn);
  $('#choice1').html(question.choice1);
  $('#choice2').html(question.choice2);
  $("#question-num").text('Question: ' + turnNumber); //updates turn number
};


//---

// player scores

var playerOneScore = 0;
var playerTwoScore = 0;

//----

// turn checking (odd is player1 even is player2) and adding scores respectively also changing turn info

var turnNumber = 1;
var checkTurn = function() {
  if (turnNumber % 2 !== 0) {
    playerOneScore = playerOneScore + 1;
    $('#player-one-score').html('Player 1:' + " " + playerOneScore);
  } else if (turnNumber % 2 === 0) {
    playerTwoScore = playerTwoScore + 1;
    $('#player-two-score').html('Player 2:' + " " + playerTwoScore);
  }
};

//---

// display whose turn

var whoseTurn = function() {
  if (turnNumber % 2 !== 0) {
    $('#turn-num').html('Its Player 1s turn');
  } else if (turnNumber % 2 === 0) {
    $('#turn-num').html('Its Player 2s turn');
  }
};

//---

//checkWinner

// var checkWinner = function(){
//   if (turnNumber == 11) {
//     if (playerOneScore > playerTwoScore) {
//       console.log("Player 1 Wins");
//       $('#container').append('<div id="winner">Player 1 Wins!</div>');
//     } else if (playerTwoScore > playerOneScore) {
//       console.log("Player 2 Wins");
//       $('#container').append('<div id="winner">Player 2 Wins!</div>');
//     } else if (playerTwoScore == playerOneScore) {
//       console.log("Tie");
//       $('#container').append('<div id="winner">Tie!</div>');
//     }
//   }
// };

//---

$('#question > p').html(question.qn);

$('#choice1').html(question.choice1);

$('#choice1').click(function() {
  console.log("choice 1");
  if (question.ans == "1") {
    console.log("correct");
    checkTurn();
  } else {
    console.log("wrong");
  }
  turnNumber = turnNumber + 1;
  checkWinner();
  loadNewQuestion();
  whoseTurn();
});

$('#choice2').html(question.choice2);

$('#choice2').click(function() {
  console.log("choice 2");
  if (question.ans == "2") {
    console.log("correct");
    checkTurn();
  } else {
    console.log("wrong");
  }
  turnNumber = turnNumber + 1;
  checkWinner();
  loadNewQuestion();
  whoseTurn();
});




//randomise a question based on question index in array
//run question
//after answer push question out of array and minus 1 in number to randomise
});
