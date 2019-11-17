//  CLOSE POP UP

// Get the <span> element that closes the mcreditsPopodal
var span = document.getElementsByClassName('close')[0]

//  GUIDE POP UP

// Get the modal
var modalGuide = document.getElementById('guidePop')

// Get the button that opens the modal
var btnGuide = document.getElementById('btnGuide')

// When the user clicks the button, open the modal
btnGuide.onclick = function () {
  modalGuide.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalGuide.style.display = 'none'
}

// Credits POP UP

// Get button
var btnCredits = document.getElementById('btnCredits')

// Open modalCredits
var modalCredits = document.getElementById('creditsPop')

// Open on Click
btnCredits.onclick = function () {
  modalCredits.style.display = 'block'
}

// Close on click
modalCredits.onclick = function () {
  modalCredits.style.display = 'none'
}

// close on click outside
window.onclick = function (event) {
  if (event.target === modalCredits) {
    modalCredits.style.display = 'none'
  }
  if (event.target === modalGuide) {
    modalGuide.style.display = 'none'
  }
}
