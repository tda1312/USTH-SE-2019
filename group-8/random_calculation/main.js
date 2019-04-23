let score = 0
let rightAns  
let wrongAns
let finalAnswer

function genNew() {
  var sign = ['+', '-', 'x', ':'];
  var firstElement =  Math.floor(Math.random() * 10 + 1);
  var secElement =  Math.floor(Math.random() * 10 + 1);
  var operator = sign[Math.floor(Math.random() * 4)];

  if (operator == '+') rightAns = firstElement + secElement;
  else if (operator == '-') rightAns = firstElement - secElement;
  else if (operator == 'x') rightAns = firstElement * secElement;
  else if (operator == ':')  {
    rightAns = firstElement / secElement;
    rightAns = rightAns.toFixed(2);
  }

  let saiso = [1, -1];
  wrongAns = rightAns + saiso[Math.floor(Math.random() * 2)];
  let answers = [rightAns, wrongAns];

  finalAnswer = answers[Math.floor(Math.random() * 2)];
  document.getElementById('Calculation').innerHTML =  firstElement + ' ' +
  operator + ' ' + secElement + ' ' + '=' + ' ' + finalAnswer;
}

function checkTrue() {
  if (finalAnswer == rightAns) {
    score += 1;
    document.getElementById('score').innerHTML = score;
  } else {
    score = 0;
    document.getElementById('score').innerHTML = score;
    alert('You fucking lost');
  }

  genNew();
}

function checkFalse() {
  if (finalAnswer == wrongAns) {
    score += 1;
    document.getElementById('score').innerHTML = score;
  } else {
    score = 0;
    document.getElementById('score').innerHTML = score;
    alert('You fucking lost');
  }

  genNew();
}

function displayScore() {
  //var score=0;
  return 'Score:' + score;
}

function restart () {
  score = 0;
  document.getElementById('score').innerHTML = score;
}
