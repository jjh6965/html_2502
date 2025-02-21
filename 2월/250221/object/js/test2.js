//  전역 변수
const d = document;
const s1 = d.querySelector("#s1 .result");
const s2 = d.querySelector("#s2 .result");
const s3 = d.querySelector("#s3 .result");
const s4 = d.querySelector("#s4 .result");
const s5 = d.querySelector("#s5 .result");
const img = d.querySelector("#s5 #img");
const img_x = d.querySelector("#s5 #img_x");
var txt = "test";
var txt2 = "test2";

// --------------------------------------s1-----
// tv객체 정의
var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function () {
  // tv객체안에서 나(this)
  txt = `tv 색상: ${this.color} - `;
  txt += `tv 가격: ${this.price} `;
};
// car객체 정의
var car = {
  color: "black",
  price: 5000000,
  info: function () {
    txt2 = `car 색상: ${this.color} - `;
    txt2 += `car 가격: ${this.price}`;
  },
};

// 요소의 생성, 객체 사용
var br = d.createElement("br");
var p1 = d.createElement("p");
tv.info();
var p1_txt = d.createTextNode(txt);
car.info();
var p1_txt2 = d.createTextNode(txt2);

//출력
p1.appendChild(p1_txt);
p1.appendChild(br);
p1.appendChild(p1_txt2);
s1.innerHTML = "";
s1.appendChild(p1);
// 출력2
// s1.innerHTML = "";
//s1.append(p1_txt, br, p1_txt2, p1);

// // --------------------------------------s2-----
// date객체 생성
var today = new Date();
var nowMonth = today.getMonth(),
  nowDate = today.getDate(),
  nowDay = today.getDay();
// worldcup date객체 생성
var worldcup = new Date(2002, 4, 31);
var theMonth = worldcup.getMonth(),
  theDate = worldcup.getDate(),
  theDay = worldcup.getDay();

// 요소의 생성, 객체 사용
txt = "";
txt2 = "";
var br2 = d.createElement("br");
var p2 = d.createElement("p");
txt = `현재 월: ${nowMonth} - 일: ${nowDate} - 요일: ${nowDay}`;
var p2_txt = d.createTextNode(txt);
txt2 = `2002월드컵 월: ${theMonth} - 일: ${theDate} - 요일: ${theDay}`;
var p2_txt2 = d.createTextNode(txt2);

// 출력
// p2.appendChild(p2_txt);
// p2.appendChild(br2);
// p2.appendChild(p2_txt2);
// s2.innerHTML = "";
// s2.appendChild(p2);
// 출력2
s2.innerHTML = "";
s2.append(p2_txt, br2, p2_txt2, p2);

// // --------------------------------------s3-----
// date객체 생성
var today = new Date();
var nowYear = today.getFullYear();
var theDate = new Date(nowYear, 11, 31);
var diffDate = theDate.getTime() - today.getTime();
var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));

// 요소의 생성, 객체 사용
txt = "";
var p3 = d.createElement("p");
txt = `연말 D-day ${result}일 남았습니다`;
var p3_txt = d.createTextNode(txt);

// 출력
// p3.appendChild(p3_txt);
// s3.innerHTML = "";
// s3.appendChild(p3);
// 출력2
s3.innerHTML = "";
s3.appendChild(p3_txt, p3);

// // --------------------------------------s4-----
var num = 2.1234;
var maxNum = Math.max(10, 5, 8, 30),
  minNum = Math.min(10, 5, 8, 30),
  roundNum = Math.round(num),
  floorNum = Math.floor(num),
  ceilNum = Math.ceil(num),
  rndNum = Math.random(),
  piNum = Math.PI;

// 요소의 생성, 객체 사용
txt = "";
var p4 = d.createElement("p");
txt = `${maxNum} - ${minNum} - ${roundNum} - ${floorNum} - ${ceilNum} - ${rndNum} - ${piNum}`;
var p4_txt = d.createTextNode(txt);

// 출력
// p4.appendChild(p4_txt);
// s4.innerHTML = "";
// s4.appendChild(p4);
// 출력2
s4.innerHTML = "";
s4.appendChild(p4_txt, p4);

// // --------------------------------------s5-----
var ranomNum = Math.ceil(Math.random() * 3);
var game = "가위";
// var game = prompt("가위, 바위 보 중 선택하세요?", "가위");
var gameNum;
switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("다시 입력해주세요~");
    location.reload();
}

// OX이미지 출력
gameNum == ranomNum
  ? (img_x.src = "./images/game_1.jpg")
  : (img_x.src = "./images/game_2.jpg");

// 출력1
// if (ranomNum == 1) {
//   // img.setAttribute("속성이름", "속성값");
//   img.setAttribute("src", "./images/math_img_1.jpg");
// } else if (ranomNum == 2) {
//   img.setAttribute("src", "./images/math_img_2.jpg");
// } else {
//   img.setAttribute("src", "./images/math_img_3.jpg");
// }

// 출력2
// if (ranomNum == 1) {
//   // src 속성값을 대입
//   img.src = "./images/math_img_1.jpg";
// } else if (ranomNum == 2) {
//   img.src = "./images/math_img_2.jpg";
// } else {
//   img.src = "./images/math_img_3.jpg";
// }

// 출력3
// 게임번호
var imgPath = "./images/math_img_" + ranomNum + ".jpg";
img.src = imgPath;