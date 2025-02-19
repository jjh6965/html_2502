//예제.2
function changeText(me) {
  me.innerHTML = "클릭 후";
}
function cht(ss) {
  ss.innerHTML = "클릭 후";
}
// chnageText라는 함수를 html에서 this를 보내면 p태그의 값이 me에 값에 할당된다.

//예제.3
function displayDate3(a) {
//   document.getElementById("p3").innerHTML = Date();
// a.innerHTML = Date();
// 버튼의 innerHTML에 현 기준 날짜를 넣었기 떄문에 버튼모양은 그대로
var a = Date();
// 하지만 변수 a에 Date를 할당 후 pp3 id의 innerHTML을 a로 출력하면? 
document.getElementById("pp3").innerHTML = a;
// h4 태그에 출력 값이 날짜로 나와야한다
// 그리고 여기에 추가로 12행까지 출력하려면 id 값을 추가로 끌고오면???
document.getElementById("p3").innerHTML = Date();
}
// dispalayDate는 사용 컴퓨터의  기준 날짜

//예제.4
document.getElementById("myBtn").onclick = displayDate4;
// 버튼에 id를 할당하고 js에서 id값에 onclick의 속성으로 이름을 달아주면 displayDate4의 이름을 가진
// 함수를 찾는다.
// 함수는 보통 먼저 정의 되는게 맞다 하지만 js는 호이스트 때문에 예외적으로 된다.
function displayDate4() {
  document.getElementById("p4").innerHTML = Date();
}
// HTML에서 버튼태그에 id값을 할당하고 dom의 id값의 onclick 속성을 = "displayDate4"라는 이름으로 지정
// 지정한 이름은 함수로 만들어 p4 태그에 출력 함수는 항상 위쪽으로 정의하는게 맞기에 위로 지정


//예제.5
function checkCookies5() {
  let text = "";
  if (navigator.cookieEnabled == true) {
    text = "참";
  } else {
    text = "거짓";
  }
  document.getElementById("p5").innerHTML = text;
}
// onload는 body태그에 적용해야한다.
// navigator가 쿠키를 못 찾게할 경우가 있다.
// onload를 Html body에 적용하고 함수를 호출 => onload=function checkCookies5()
// js 호출 함수로 선언되어 text변수에 공백을 할당하고 네비게이터의 쿠키가 있으면 참이면 text에 참을 출력
// false면 거짓을 출력
// 출력은 p5에 text 값을 출력한다.

//예제.6
function upperCase() {
  const x6 = document.getElementById("fname6");
  x6.value = x6.value.toUpperCase();
}
// 호출이 되면 x6의 변수에 id가 fname6인 텍스트를 할당하고 x6의 값은 x6의 대문자 값으로 출력된다.

//예제.7
function upperCase1() {
  const x7 = document.getElementById("fname7");
  x7.value = x7.value.toUpperCase();
}

//예제.8
function mOver(obj) {
  obj.innerHTML = "Thank You";
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me";
}

//예제.9
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You";
}
