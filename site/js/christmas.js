var myVar = setInterval(myTimer, 1);

function myTimer() {
    var timerElement = document.getElementById("timer");
    var date = new Date();
    var milliNow = date.getTime();
    var christmasMilli = new Date(2019, 11, 23, 0, 0, 0, 0,);
    var milliToChristmas = christmasMilli - milliNow;
    timerElement.innerHTML = milliToChristmas;
}
