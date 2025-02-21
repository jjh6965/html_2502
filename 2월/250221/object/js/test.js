//  전역 변수
// const d = document;
const s1 = document.querySelector("#s1  .result");
// 문서의 css선택자로 아이디가 s1의 class가 result인 태그를 선택 
//  = 값이 결과인 p태그 
var txt = "test";
// txt 변수에 초기 값 문자열 test 할당.
var tv = new Object();
// tv 변수에 object 객체를 할당.
tv.color = "white";
// tv 변수 안에 객체에 color은 흰색을 할당. 
tv.price = 300000;
// tv변수의 안에 객체에 price 값은 300000 할당.
tv.info = function () {
  // tv객체안에서 나(this)
  txt = `tv 색상: ${this.color} - `;
  txt += `tv 가격: ${this.price} `;
};
//tv 변수의 info라는 이름의 익명함수를 할당.
var br = document.createElement("br");
//br 변수에 br 태그를 할당.
var p1 = document.createElement("p");
//p1 변수에 p 태그를 할당.
tv.info();
// 함수 호출.
var p1_txt = document.createTextNode(txt);
// p1_txt변수에 문서의 텍스트(txt)를 할당.
p1.appendChild(p1_txt);
// p태그의 자식을 할당.
s1.appendChild(p1);
//결과란에 p1을 할당

//출력
// p1.appendChild(br);
// p1.appendChild(p1_txt2);
// s1.innerHTML = "";
//출력2
//s1.innerHTML = "";
//s1.append(p1_txt, br, p1_txt2, p1);


// const s2 = d.querySelector("#s2 .result");
// const s3 = d.querySelector("#s3 .result");
// const s4 = d.querySelector("#s4 .result");
// const s5 = d.querySelector("#s5 .result");
// const img = d.querySelector("#s5 #img");
// var txt2 = "test2";

// --------------------------------------s1-----
// tv객체 정의
// car객체 정의
// var car = {
//   color: "black",
//   price: 5000000,
//   info: function () {
//     txt2 = `car 색상: ${this.color} - `;
//     txt2 += `car 가격: ${this.price}`;
//   },
// };

// 요소의 생성, 객체 사용
// car.info();
// var p1_txt2 = document.createTextNode(txt2);

// --------------------------------------s2-----
// // date객체 생성
// var today = new Date();
// var nowMonth = today.getMonth(),
//   nowDate = today.getDate(),
//   nowDay = today.getDay();
// // worldcup date객체 생성
// var worldcup = new Date(2002, 4, 31);
// var theMonth = worldcup.getMonth(),
//   theDate = worldcup.getDate(),
//   theDay = worldcup.getDay();

// // 요소의 생성, 객체 사용
// txt = "";
// txt2 = "";
// var br = d.createElement("br");
// var p2 = d.createElement("p");
// txt = `현재 월: ${nowMonth} - 일: ${nowDate} - 요일: ${nowDay}`;
// var p2_txt = d.createTextNode(txt);
// txt2 = `2002월드컵 월: ${theMonth} - 일: ${theDate} - 요일: ${theDay}`;
// var p2_txt2 = d.createTextNode(txt2);

// // 출력
// // p2.appendChild(p2_txt);
// // p2.appendChild(br);
// // p2.appendChild(p2_txt2);
// // s2.innerHTML = "";
// // s2.appendChild(p2);
// // 출력2
// s2.innerHTML = "";
// s2.appendChild(p2_txt, br, p2_txt2, p2);

// // --------------------------------------s3-----
// // date객체 생성
// var today = new Date();
// var nowYear = today.getFullYear();
// var theDate = new Date(nowYear, 11, 31);
// var diffDate = theDate.getTime() - today.getTime();
// var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));

// // 요소의 생성, 객체 사용
// txt = "";
// var p3 = d.createElement("p");
// txt = `연말 D-day ${result}일 남았습니다`;
// var p3_txt = d.createTextNode(txt);

// // 출력
// // p3.appendChild(p3_txt);
// // s3.innerHTML = "";
// // s3.appendChild(p3);
// // 출력2
// s3.innerHTML = "";
// s3.appendChild(p3_txt, p3);

// // --------------------------------------s4-----
// var num = 2.1234;
// var maxNum = Math.max(10, 5, 8, 30),
//   minNum = Math.min(10, 5, 8, 30),
//   roundNum = Math.round(num),
//   floorNum = Math.floor(num),
//   ceilNum = Math.ceil(num),
//   rndNum = Math.random(),
//   piNum = Math.PI;

// // 요소의 생성, 객체 사용
// txt = "";
// var p4 = d.createElement("p");
// txt = `${maxNum} - ${minNum} - ${roundNum} - ${floorNum} - ${ceilNum} - ${rndNum} - ${piNum}`;
// var p4_txt = d.createTextNode(txt);

// // 출력
// // p4.appendChild(p4_txt);
// // s4.innerHTML = "";
// // s4.appendChild(p4);
// // 출력2
// s4.innerHTML = "";
// s4.appendChild(p4_txt, p4);

// // --------------------------------------s5-----
// var game = "가위";
// // var game = prompt("가위, 바위 보 중 선택하세요?", "가위");
// var gameNum;
// switch (game) {
//   case "가위":
//     gameNum = 1;
//     break;
//   case "바위":
//     gameNum = 2;
//     break;
//   case "보":
//     gameNum = 3;
//     break;
//   default:
//     alert("다시 입력해주세요~");
//     location.reload();
// }

// // 출력1
// // var ranomNum = Math.ceil(Math.random() * 3);
// // if (gameNum == 1) {
// //   img.setAttribute("src", "./images/math_img_1.jpg");
// // } else if (gameNum == 2) {
// //   img.setAttribute("src", "./images/math_img_2.jpg");
// // } else {
// //   img.setAttribute("src", "./images/math_img_3.jpg");
// // }

// // 출력2
// // var ranomNum = Math.ceil(Math.random() * 3);
// // if (gameNum == 1) {
// //   img.src = "./images/math_img_1.jpg";
// // } else if (gameNum == 2) {
// //   img.src = "./images/math_img_2.jpg";
// // } else {
// //   img.src = "./images/math_img_3.jpg";
// // }

// // 출력3
// var ranomNum = Math.ceil(Math.random() * 3);
// var imgPath = "./images/math_img_" + ranomNum + ".jpg";
// img.src = imgPath;
