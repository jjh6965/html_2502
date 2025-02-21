// var a1 = document.getElementById("demo1");
// var a2 = document.getElementById("demo2");
// var a3 = document.getElementById("demo3");
// var a4 = document.getElementById("demo4");
// var a5 = document.getElementById("demo5");
// var a6 = document.getElementById("demo6");

var aa1 = document.querySelectorAll("s1");
//예제.1 object
var txt;
// var txt2;
var br = document.createElement("br");



//1
var tv = new Object();
tv.color = "white";
tv.price = "300000";
tv.info = function () {
    txt = "tv색상: " + this.color ;
    txt += "tv가격: " + this.price ;
};

// p1.appendChild(p1_txt);
var p1 = document.createElement("p");
var p1_txt = document.createTextNode(txt);
p1.appendChild(p1_txt);







// var car = {
//     color: "black",
//     price: 500000,
//     info: function () {
//         txt2 = "car색상: " + this.color ;
//         txt2 += "car가격: " + this.price;
//     }
// };
// tv.info();


//2

// s1.append(br1);

// car.info();
// var tt2 = document.createTextNode(txt2);
// demo2.append(tt2);

// var today = new Date();
// var nowMonth = today.getMonth(),
//   nowDate = today.getDate(),
//   nowDay = today.getDay();
// a3.innerHTML = "현재 월:" + nowMonth + "<br>";
// a3.innerHTML += "현재 일:" + nowDate + "<br>";
// a3.innerHTML += "현재 요일:" + nowDay + "<br><br>";

// var worldcup = new Date(2002, 4, 31);
// var theMonth = worldcup.getMonth(),
//   theDate = worldcup.getDate(),
//   theDay = worldcup.getDay();

// a3.innerHTML += "<h3>월드컵 날짜 정보</h3>";
// a3.innerHTML += "몇 월 : " + theMonth + "<br>";
// a3.innerHTML += "며 칠 : " + theDate + "<br>";
// a3.innerHTML += "무슨 요일 : " + theDay + "<br>";

// var today = new Date();
// var nowYear = today.getFullYear();

// var theDate = new Date(nowYear, 11, 31);
// var diffDate = theDate.getTime() - today.getTime();

// var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
// a4.innerHTML = "연말 D-day : " + result + "일 남았습니다.";

// var num = 2.1234;

// var maxNum = Math.max(10, 5, 8, 30),
//   minNum = Math.min(10, 5, 8, 30),
//   roundNum = Math.round(num),
//   floorNum = Math.floor(num),
//   ceilNum = Math.ceil(num),
//   roundNum = Math.random(),
//   piNum = Math.PI;

// a5.innerHTML =
//   maxNum +
//   "<br>" +
//   roundNum +
//   "<br>" +
//   floorNum +
//   "<br>" +
//   ceilNum +
//   "<br>" +
//   roundNum +
//   "<br>" +
//   piNum;

// a6.innerHTML = "<h2>컴퓨터 가위, 바위, 보 맞추기</h2>";

// var game = prompt("가위, 바위, 보 중 선택하세요?", "가위");
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
//     alert("잘못 작성하였습니다.");
//     location.reload();
// }

// var com = Math.ceil(Math.random() * 3);
// a6.innerHTML += "<img src=./images/math_img_" + com + ".jpg>'";
// if (gameNum == com) {
//   a6.innerHTML += "<br>맞췃습니다.";
// }
