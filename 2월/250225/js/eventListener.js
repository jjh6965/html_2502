//예제.1
document.getElementById("btn-1").addEventListener("click", dis1);
//문서의 id 값이 btn-1인 태그에 동작 부위를 연결한다.
//click을 햇을대 dis1의 함수를 호출한다.
function dis1() {
  document.getElementById("demo1").innerHTML = Date();
}
//dis1 함수 호출 문서의 demo1 태그의 HTML은 현재 날짜를 할당.

// document.getElementById("btn-2").addEventListener("click", dis2);

// function dis2() {
//   alert("안녕하세요.");
// }

//예제.4
document.getElementById("btn-2").addEventListener("click", ale1);
// 위와 같이 분할해도 되지만 이벤트리스너의 함수안에 함수를 넣어도 적용이 된다 = 가독성

var btn4 = document.getElementById("btn-4");
btn4.addEventListener("click", ale1);
btn4.addEventListener("click", ale2);

function ale1() {
  alert("Hello World!!");
}

function ale2() {
  alert("예제4번의 2번째 경고창!");
}

//예제.5
var btn5 = document.getElementById("btn-5");
btn5.addEventListener("mouseover", mover);
btn5.addEventListener("mouseout", mout);
btn5.addEventListener("click", mclick);

function mover() {
  document.getElementById("demo5").innerHTML +=
    "마우스를 올렸을 때 출력" + "<br>";
}
function mout() {
  document.getElementById("demo5").innerHTML += "마우스를 떗을때 출력" + "<br>";
}
function mclick() {
  document.getElementById("demo5").innerHTML +=
    "마우스를 클릭했을 때 출력" + "<br>";
}

//예제.6
window.addEventListener("resize", function () {
  document.getElementById("demo6").innerHTML = Math.random();
});

//예제.7
let x7 = 5;
let y7 = 7;
var btn7 = document.getElementById("btn-7");

btn7.addEventListener("click", function () {
  gob(x7, y7);
});

function gob(a, b) {
  document.getElementById("demo7").innerHTML = a * b;
}

//예제.8
document.getElementById("d8-1").addEventListener(
  "click",
  function () {
    alert("클릭-1의 div 태그 입니다.");
  },
  false
);

document.getElementById("p8-1").addEventListener(
  "click",
  function () {
    alert("클릭-1의 p 태그 입니다.");
  },
  false
);

document.getElementById("d8-2").addEventListener(
  "click",
  function () {
    alert("클릭-2의 div 태그 입니다.");
  },
  true
);

document.getElementById("p8-2").addEventListener(
  "click",
  function () {
    alert("클릭-2의 p 태그 입니다.");
  },
  true
);

//예제.9
document.getElementById("d9-1").addEventListener("mousemove", ran9);

function ran9() {
  document.getElementById("demo9").innerHTML = Math.random();
}

function rem9() {
  document.getElementById("d9-1").removeEventListener("mousemove", ran9);
}

