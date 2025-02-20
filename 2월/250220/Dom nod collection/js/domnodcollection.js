//예제.1
document.getElementById("p1").innerHTML =
  document.getElementById("h1").innerHTML;

//예제.2
document.getElementById("p2").innerHTML =
  document.getElementById("h2").firstChild.nodeValue;

// //예제.3
// document.getElementById("p3").innerHTML =
//   d5555.getElementById("d5555").childNodes[0].nodeValue;
document.getElementById("p3").innerHTML =
  document.getElementById("d3").childNodes[1].nodeValue;

//예제.4
// document.getElementById("p4").innerHTML =
// document.body.innerHTML;

//예제.5
// document.getElementById("p5").innerHTML =
// document.documentElement.innerHTML;

//예제.6
document.getElementById("p6").innerHTML =
  document.getElementById("h6").nodeName;

//예제.7
document.getElementById("p7").innerHTML =
  document.getElementById("h7").nodeType;

////////////////////////////////////////////////////////////////
// 예제.1-1
const para1 = document.createElement("p");
const node1 = document.createTextNode("예제.1-1");
para1.appendChild(node1);

const element1 = document.getElementById("dd1");
element1.appendChild(para1);

//예제.1-2
function myFunction2() {
  document.getElementById("p21").remove();
}

//예제.1-3
const parent3 = document.getElementById("dd3");
const child3 = document.getElementById("p31");
parent3.removeChild(child3);

//예제.1-4
const div4 = document.getElementById("dd4");
const p41 = document.getElementById("p41");
const para4 = document.createElement("p");
const change1 = document.createTextNode("바뀌었습니다.");
para4.appendChild(change1);
div4.replaceChild(para4, p41);

//예제.2-1
const myCollection11 = ddd5.getElementsByTagName("p");

document.getElementById("c1").innerHTML =
  "예제.2-1 " + myCollection11[1].innerHTML;

//예제.2-2

const myCollection12 = ddd6.getElementsByTagName("p");

document.getElementById("c2").innerHTML =
  "안 " + myCollection12.length + " 녕 예제2-2";

//예제.2-3
function myFunction13() {
  const myCollection10 = ddd7.getElementsByTagName("p");
  for (let i = 0; i < myCollection10.length; i++) {
    myCollection10[i].style.color = "red";
  }
}

//예제.3-1
const myNodelist = dddd1.querySelectorAll("p");

document.getElementById("pppp1").innerHTML =
  "드르르르륵1 " + myNodelist[1].innerHTML;

//예제.3-2
const myNodelist2 = dddd2.querySelectorAll("p");

document.getElementById("pppp2").innerHTML =
  "드르르르륵2 " + myNodelist2.length + " 드르르를륵2";


//예제.3-3

function myFunction44(){
   const xx = dddd3.querySelectorAll('p');

    for(let i=0; i <xx.length; i++){
        xx[i].style.color = "red";
    }
}