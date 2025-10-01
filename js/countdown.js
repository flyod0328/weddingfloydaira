var countDownDate = new Date("Jan 8, 2026 14:00:00").getTime();

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("cd1").innerHTML = days + " Days, " + hours + ":"
  + minutes + ":" + seconds + "";
  document.getElementById("cd2").innerHTML = days + " Days, " + hours + ":"
  + minutes + ":" + seconds + "";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cd1").innerHTML = "";
    document.getElementById("cd2").innerHTML = "";
  }
}, 1000);

$(function () {
  $('[data-toggle="popover"]').popover()
})