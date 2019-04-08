// manager of system clock
function clockBarManager(){
    this.limited=5000; // define valid time for 1 round (milisecond)
    this.initTime; // define init time beginning count
    this.fracTime; // percentage of time valid to answr 

    // define machenism of cooldown clock bar
    this.timeProcess = function(){

        // define begin cooldown
        var initTime = new Date().getTime();

        // define time cooldown
        var process = setInterval(function(){

            var limited = 5000;

            // get current time
            var now = new Date().getTime();

            // find the distance between now and the init time
            var distance = now - initTime;

           if (distance > limited){
               clearInterval(process);
               getPer("time out")
               return;                
           }

            // set percentage of time cooldown
            var fracTime = Math.round((distance/limited)*100);

            // draw percentage to page
            getPer(fracTime + '%');

        },1);
    };
}

// send message to page
function getPer(Message){
    document.getElementById('demo').innerHTML = Message;
}