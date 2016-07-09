var qnList = [
  {qn: "Is Singapore a clean city?", choice1: "yes", choice2: "no", ans:"1",},
  {qn: "False or Positive", choice1: "true", choice2: "false", ans:"0",},
  {qn: "How many letters does red have?", choice1: "3", choice2: "4", ans:"0",}
];

var numOfQns = qnList.length - 1;

var randomiseQn = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//selecting a random qn

var question = qnList[randomiseQn(0, numOfQns)];

//---

$('.question > p').html(question.qn);

$('#choice1').html(question.choice1);

$('#choice2').html(question.choice2);






//randomise a question based on question index in array
//run question
//after answer push question out of array and minus 1 in number to randomise
