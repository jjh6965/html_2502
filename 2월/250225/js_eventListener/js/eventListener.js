//예제.1
document.getElementById("btn-1").addEventListener("click", dis1);
//문서의 id 값이 btn-1인 태그에 동작 부위를 연결한다.
//click을 햇을대 dis1의 함수를 호출한다.

function dis1() {
  document.getElementById("demo1").innerHTML = Date();
}
//dis1 함수 호출 문서의 demo1 태그의 HTML은 현재 날짜를 할당.

//예제.2~3
// document.getElementById("btn-2").addEventListener("click", function() {
//   alert("안녕하세요.");
// });

document.getElementById("btn-2").addEventListener("click", ale1);
// 위와 같이 분할해도 되지만 이벤트리스너의 함수안에 함수를 넣어도 적용이 된다 = 가독성

//예제.4
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
//변수를 할당하고 btn7의 변수에 id값을 할당.
btn7.addEventListener("click", function () {
  gob(x7, y7);
});
// 변수의 이벤트 "클릭" 발생했을 때 gob의 함수를 호출한다.
function gob(a, b) {
  document.getElementById("demo7").innerHTML = a * b;
}
// gob 함수가 호출 되었을때 demo7 id의 이너html은 axb를 출력한다.
//출력 할 때 a와b 의 매개 변수에 x7,y7이 대입이 되고 해당 변수는 상단에 값을 할당 해놓았기 때문에 5와 7이 들어간다.
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
// bubbling == false (나 먼저 자식 -> 부모)
// div > p 를 이벤트를 줬을 때 이벤트가 중복된다.
// 기본 조건은 div가 바깥쪽이기 때문에 div의 이벤트가 먼저 발생하지만 false줄 경우 p태그 부터 호출된다.

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

//capturing == true (부모 먼저 -> 자식 )
//true를 할당했을 때 부모 > 자식으로 이벤트가 발생한다.

//예제.9
document.getElementById("d9-1").addEventListener("mousemove", ran9);

function ran9() {
  document.getElementById("demo9").innerHTML = Math.random();
}

function rem9() {
  document.getElementById("d9-1").removeEventListener("mousemove", ran9);
}

// div id의 이벤트를 마우스 움직일때 ran9 함수를 호출한다.
// id가 "demo9"인 p태그에 랜덤 값을 할당하여 마우스가 움직일떄마다 p태그에 랜덤값을 할당한다.
// div에 리무브이벤트리스너를 주고 움직일때 ran9를 호출
// html에 onclick 함수를 사용하여 클릭 시 rem9함수를 호춣