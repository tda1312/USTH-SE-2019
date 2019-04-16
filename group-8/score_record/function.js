<script>
var localStorageName = "record";
var highScore;

highScore = localStorage.getItem(localStorageName) == null ? 0 :
                        localStorage.getItem(localStorageName);

document.getElementByID("highscore").innerHTML = highScore;
<script>
