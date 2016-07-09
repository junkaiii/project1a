$(document).ready(function() {

var qnList = [
  {qn: "Is Singapore a clean city?", choice1: "yes", choice2: "no", ans:"1",},
  {qn: "False or Positive", choice1: "true", choice2: "false", ans:"2",},
  {qn: "How many letters does red have?", choice1: "3", choice2: "4", ans:"1",},
  {qn: "Emma Watson of Harry Potter fame, was born in which country?", choice1: "France", choice2: "England", ans:"1",},
  {qn: "California has which city as its capital?", choice1: "Portland", choice2: "Sacremento", ans:"2",}

];

var indexOfQns = qnList.length - 1; //calculating index number of question

var randomiseQn = function(min, max) { // randomiser function
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



//selecting a random qn

var indexNum = randomiseQn(0, indexOfQns);
var question = qnList[indexNum]; // choosing a random question between 0 and question index

//---



$('.question > p').html(question.qn);

$('#choice1').html(question.choice1);

$('#choice1').click(function() {
  console.log("choice 1");
  if (question.ans == "1") {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  qnList.splice(indexNum, 1);
  indexOfQns = qnList.length - 1;
  indexNum = randomiseQn(0, indexOfQns);
  question = qnList[indexNum];
  $('.question > p').html(question.qn);
  $('#choice1').html(question.choice1);
  $('#choice2').html(question.choice2);
});

$('#choice2').html(question.choice2);

$('#choice2').click(function() {
  console.log("choice 2");
  if (question.ans == "2") {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  qnList.splice(indexNum, 1);
  indexOfQns = qnList.length - 1;
  indexNum = randomiseQn(0, indexOfQns);
  question = qnList[indexNum];
  $('.question > p').html(question.qn);
  $('#choice1').html(question.choice1);
  $('#choice2').html(question.choice2);
});




//randomise a question based on question index in array
//run question
//after answer push question out of array and minus 1 in number to randomise
});
