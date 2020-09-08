var i = document.getElementById("intro");
var j =  document.getElementsByClassName("ins");
var k = document.getElementsByClassName("sec");
function stop(){
    j[0].style.opacity="0";
    k[0].style.opacity="0";
    setTimeout(function () {
        i.style.opacity = "0";
        j[0].style.opacity = "1";
        k[0].style.opacity = "1";
    }, 7000);
  
}
function dimension(a){
   
    id = event.srcElement.id;
       console.log(localStorage.getItem("ID"));
   // alert("hloo");
}