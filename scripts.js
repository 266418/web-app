<script src="scripts.js"></script>
function show(){
    document.getElementById("panel-1").style.display = "none";
    document.getElementById("panel-2").style.display = "block";
 }
 
 function hide(){
    document.getElementById("panel-1").style.display = "block";
    document.getElementById("panel-2").style.display = "none";
 }
 const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}





const d = new Date();
document.getElementById("demo").innerHTML = d;
var now = new Date();
  var datetime = now.toLocaleString();
  document.getElementById("datetime").innerHTML = datetime;