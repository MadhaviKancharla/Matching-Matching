var i = document.getElementById("intro");
var j = document.getElementsByClassName("instructions");
var k = document.getElementsByClassName("selection");
function stop() {
  j[0].style.opacity = "0";
  k[0].style.opacity = "0";
  setTimeout(function () {
    
    j[0].style.opacity = "1";
    k[0].style.opacity = "1";
    i.style.opacity="0";
  }, 7000);
}
function dimension(a) {
  localStorage.setItem("ID", a);
 
}
