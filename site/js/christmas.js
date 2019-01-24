var myVar = setInterval(myTimer, 1);

function myTimer() {
    var timerElement = document.getElementById("timer");
    var date = new Date();
    var milliNow = date.getTime();
    var christmasMilli = new Date(2019, 11, 24, 0, 0, 0, 0,);
    var milliToChristmas = christmasMilli - milliNow;
    var daysToChristmas = Math.floor(milliToChristmas/1000/60/60/24);
    var left = milliToChristmas - daysToChristmas*1000*60*60*24;
    var hoursToChristmas = Math.floor(left/1000/60/60);
    left = left - hoursToChristmas*1000*60*60;
    var minutesToChristmas = Math.floor(left/1000/60);
    left = left - minutesToChristmas*1000*60
    var secondsToChristmas = Math.floor(left/1000); 
    timerElement.innerHTML =  daysToChristmas + " dagar , " + hoursToChristmas + " timmar, " + minutesToChristmas + " minuter och " + secondsToChristmas + " sekunder kvar till Julafton ";
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}