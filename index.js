var i = document.getElementById("intro");

function stop(){
  
    setTimeout(function () {
        i.style.opacity = "0";
       
    }, 7000);
   
}
function dimension(a){
   
 
    localStorage.setItem("ID",a);
  
   // alert("hloo");
}
