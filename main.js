var a = [
  "doremon.jpg",
  "doremon.jpg",
  "dorami.jpg",
  "dorami.jpg",
  "door.png",
  "door.png",
  "nobitha.jpg",
  "nobitha.jpg",
  "fan.jpg",
  "fan.jpg",
  "sujuka.png",
  "sujuka.png",
  "zeon.png",
  "zeon.png",
  "sunio.png",
  "sunio.png",
  "doremon3.webp","doremon3.webp",
 "nobitha2.jpg",
 "nobitha2.jpg"
];
var i = -1;
dimensions = localStorage.getItem("ID");
a = a.slice(0, 4 * Number(dimensions));
var moves = 0;
equal = [];
var p = false;
finished = 0;
var b = Number(dimensions) * 4;

rem = document.getElementById("try");
function storing(){
 
  var name = document.getElementById("a").value;
  localStorage.setItem("Name", name);
  var c = document.getElementById("startname");
  c.style.visibility="hidden";
  rem.style.opacity = '1';
  

}
function addingdivs(x){
   
    add = document.getElementById("try");
    newdivs = document.createElement('div');
    newdivs.setAttribute("class", "inner-box");
    newimg = document.createElement('img');
    newimg.setAttribute('src', 'Images/tapme.gif');
    newimg.style.src = "Images/tapme.gif";
    newdivs.appendChild(newimg);
    newimg.setAttribute("id", x);
    newimg.setAttribute('onclick','changeimg()');
    add.appendChild(newdivs);
}
if (b == 12) {
  document.getElementById("15").parentElement.style.visibility = "hidden";
  document.getElementById("14").parentElement.style.visibility = "hidden";
  document.getElementById("13").parentElement.style.visibility = "hidden";
  document.getElementById("12").parentElement.style.visibility = "hidden";

  rem.style.gridTemplateColumns = "110px 110px 110px";
}
if (b == 20) {
    rem.style.width = "360px";
    rem.style.gridTemplateColumns = "61px 61px 61px 61px 63px";
    for(let j=16;j<20;j++){
        addingdivs(j);
    }
  var d = document.getElementsByTagName("img");
  for(let i=0;i<d.length;i++){
    d[i].style.width="60px";
  }
}

function shuffle() {
  len = a.length;
  for (let i = a.length - 1; i >= 0; i--) {
    shuffleindex = Math.floor(Math.random() * i);
    temp = a[i];
    a[i] = a[shuffleindex];
    a[shuffleindex] = temp;
  }
  //console.log(a);
}

function changeimg() {
  
  var id = event.srcElement.id;
 // alert(id);
  var ele = document.getElementById(id);
  console.log(ele.src.includes("Images/tapme.gif"));
  if (ele.src.includes("Images/tapme.gif")) {
    console.log("hloo");
    moves += 1;
    indexf = Number(id);
    if (p) {
      setTimeout(function () {
        ele.src = "Images/" + a[indexf];
        ele.setAttribute("class", "rechange");
        equal.push(a[indexf], ele);
        console.log(equal);
        if (equal.length == 4) {
          check(equal);
        }
      }, 500);
    } else {
      ele.src = "Images/" + a[indexf];
      ele.setAttribute("class", "rechange");
      equal.push(a[indexf], ele);
      console.log(equal);
      if (equal.length == 4) {
        check(equal);
      }
    }
  }
}
function restart() {
  board = document.getElementById("congo");
  board.innerHTML = "You have finished it in " + moves + " moves🥳";
  visi = document.getElementById("board");
  visi.style.visibility = "hidden";
  for (let i = 0; i < a.length; i++) {
    ele = document.getElementById(String(i));
    ele.src = "Images/tapme.gif";
  }
  shuffle();
  moves=0;
  finished=0;
}
function check(a) {
  console.log("came");
  if (a[0] != a[2]) {
    setTimeout(function () {
      a[1].src = "Images/tapme.gif";
      a[3].src = "Images/tapme.gif";
    }, 800);
    p = true;
    equal = [];
  } else {
    finished += 1;
    setTimeout(function () {
      if (finished == Number(dimensions) * 2) {
        console.log("work");
        finished = 0;
        a = document.getElementById("first");
        a.innerHTML = "🎉Congratulations "+localStorage.getItem("Name")+"🎉";
        board = document.getElementById("congo");
        board.innerHTML = "You have finished it in " + moves + " moves🥳";
        visi = document.getElementById("board");
        visi.style.visibility = "visible";
      }
    }, 800);
    equal = [];
  }
}
