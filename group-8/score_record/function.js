function showHS () {
  checkHS()
}

function checkHS () {
  // check if there's available score, if not then assign value 0
  var highScore = localStorage.getItem('Score') !== null ? JSON.parse(localStorage.getItem('Score')) : 0
  var userpoint = localStorage.getItem('usrScore') !== null ? JSON.parse(localStorage.getItem('usrScore')) : 0
  if (userpoint > highScore) {
    highScore = userpoint // change high score if user score > saved game score
    localStorage.setItem('Score', JSON.stringify(highScore)) // save new high score
  }

  updateHighScore(userpoint, highScore)
}

function updateHighScore (score, highScore) {
  document.getElementById('highScore').innerHTML = 'HighScore: ' + highScore // print high score
  document.getElementById('score').innerHTML = 'Score: ' + score // print score
}
