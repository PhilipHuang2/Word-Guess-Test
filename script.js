var button = document.querySelector("#start");
var timer = document.querySelector('#timer');

var secondsLeft = 4;

button.addEventListener("click", function(){
// this button is suppose to start the game
    console.log("hello");
});

function setTime( ) {
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = secondsLeft.toString();
        if(secondsLeft == 0)
        {
            //stopping the setInterval
            clearInterval(timeInterval);
            alert("Blah");
            //telling user they failed.
        }

    },1000);
}

setTime();