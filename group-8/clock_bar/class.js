let limited = 2000; // define valid time for 1 round (milisecond)
let initTime; // define init time beginning count
let fracTime; // percentage of time valid to answr 
let timeUpdate = 50; // define  of fluild of progress

// manager of system clock
function clockBarManager(){
    
    // define machenism of cooldown clock bar
    this.timeProcess = function(){

        // define begin cooldown
        initTime = new Date().getTime();

        // define time cooldown
        var process = setInterval(function(){

            // get current time
            var now = new Date().getTime();

            // find the distance between now and the init time
            var distance = now - initTime;

           if (distance > limited){
               clearInterval(process);
               drawFluid("100%")
               return;                
           }

            // set percentage of time cooldown
            fracTime = Math.round((distance/limited)*100);

            // draw percentage to page
            drawFluid(fracTime+"%");

        },timeUpdate);
    };
}

// send message to page
function drawFluid(Message){
    document.getElementById("perCents").style.width = Message;
}