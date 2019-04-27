let score = 0
let rightAns
let wrongAns
let finalAnswer

function genNew () {
  var sign = ['+', '-', 'x', ':']
  var firstElement = Math.floor(Math.random() * 10 + 1)
  var secElement = Math.floor(Math.random() * 10 + 1)
  var operator = sign[Math.floor(Math.random() * 4)]

  if (operator === '+') rightAns = firstElement + secElement
  else if (operator === '-') rightAns = firstElement - secElement
  else if (operator === 'x') rightAns = firstElement * secElement
  else if (operator === ':') {
    rightAns = firstElement / secElement
    rightAns = rightAns.toFixed(2)
  }

  let saiso = [1, -1]
  wrongAns = rightAns + saiso[Math.floor(Math.random() * 2)]
  let answers = [rightAns, wrongAns]

  finalAnswer = answers[Math.floor(Math.random() * 2)]
  document.getElementById('Calculation').innerHTML = firstElement + ' ' +
  operator + ' ' + secElement + ' ' + '=' + ' ' + finalAnswer
}

function checkTrue () {
  if (finalAnswer === rightAns) {
    score += 1
    document.getElementById('score').innerHTML = displayScore()
  } else {
    RecordScore()
    window.location.href = '../menu/endGame.html'
  }

  genNew()
}

function checkFalse () {
  if (finalAnswer === wrongAns) {
    score += 1
    document.getElementById('score').innerHTML = displayScore()
  } else {
    RecordScore()
    window.location.href = '../menu/endGame.html'
  }

  genNew()
}

function displayScore () {
  return 'Score:' + score
}

function RecordScore () {
  localStorage.setItem('usrScore', JSON.stringify(score)) // save score
}

// script to export function for testing
class RandomMath {
  genNewMath () {
    genNew()
  }
  checkFalseMath () {
    checkFalse()
  }
  checkTrueMath () {
    checkTrue()
  }
  displayScoreMath () {
    return displayScore()
  }
  getScore () {
    return score
  }
  getRightAns () {
    return rightAns
  }
  getWrongAns () {
    return wrongAns
  }
  getFinalAnswer () {
    return finalAnswer
  }
}

module.exports = new RandomMath()
