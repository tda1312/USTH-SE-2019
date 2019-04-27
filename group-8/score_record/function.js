function showHS () {
  var oldScore = 2 // set demo game score
  localStorage.setItem('Score', JSON.stringify(oldScore)) // save game score as string

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

  updateHighScore(highScore)
}

function updateHighScore (highScore) {
  document.getElementById('scrdisplay').innerHTML = highScore // print high score
  document.getElementById('scrdiv').style.display = 'block' // show high score block
}
