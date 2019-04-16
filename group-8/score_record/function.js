function highScore(){
	var localStorageName = "record";
	var highScore;
	var test = 2;

	highScore = localStorage.getItem(localStorageName) == null ? 0 :
        	                localStorage.getItem(localStorageName);
	updateHighScore(test);
}

function updateHighScore(Test){
	document.getElementByID('highscore').innerHTML = Test;
}