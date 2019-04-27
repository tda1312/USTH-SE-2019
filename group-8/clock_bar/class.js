let limited = 4000 // define valid time for 1 round (milisecond)
let initTime // define init time beginning count
let fracTime // percentage of time valid to answer
let timeUpdate = 10 // define  of fluild of progress

// manager of system clock
class clockBarManager {
  // init manager
  constructor () {
    this.timeout = 0
  }
  // timeOut trigger
  setTimeout (message) {
    if (message === 'true') {
      this.timeout = 1
    } else {
      this.timeout = 0
    }
  }
  // define get value of timeOut
  getTimeout () {
    return this.timeout
  }
  // define machenism of cooldown clock bar
  timeProcess (itself = this) {
    // define begin cooldown
    initTime = new Date().getTime()

    // function to send clockBar instant to setInterval
    function sendTosetInterval () {
      return itself
    }
    // define time cooldown
    var process = setInterval(function () {
      // get clockBar instant
      let itself = sendTosetInterval()
      // get current time
      var now = new Date().getTime()
      // find the distance between now and the init time
      var distance = now - initTime

      if (distance > limited) {
        drawFluid('0%')
        clearInterval(process)
        itself.setTimeout('true')
      }
      // set percentage of time cooldown
      fracTime = Math.round(100 - ((distance / limited) * 100))

      // draw percentage to page
      drawFluid(fracTime + '%')
    }, timeUpdate)
  }
}

// send message to page
function drawFluid (Message) {
  document.getElementById('perCents').style.width = Message
}
