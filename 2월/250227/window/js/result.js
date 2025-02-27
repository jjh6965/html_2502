var d = document;
var openPopup = d.getElementById("openPopup");
var s3 = d.querySelector(".s3 #result");
var s4 = d.querySelector(".s4 #result");
var s5 = d.querySelector(".s5 #result");
var s6 = d.querySelector(".s6 #result");
var s7 = d.querySelector(".s7 #result");

// --------------------------------------------------s1
// OPEN popup창
function funOpen() {
  window.open(
    "winpopup.html",
    "pop1",
    "width=300, height=400, \
          left=300, top=50"
  );
}
openPopup.addEventListener("click", funOpen);

// --------------------------------------------------s2
// 일정 간격을 설정하여, 규칙적으로 연산결과를 console출력
var addNum;
var subNum;
var auto_1;
var auto_2;

// 3초 간격으로 이너함수실행
function setStepUp() {
  addNum = 0;
  auto_1 = setInterval(function () {
    addNum++;
    console.log("addNum: " + addNum);
  }, 3000);
}

function setStepDown() {
  subNum = 1000;
  auto_2 = setInterval(function () {
    subNum--;
    console.log("subNum: " + subNum);
  }, 3000);
}

// --------------------------------------------------s3
var addNum = 998;
function setCount5() {
  var auto = setTimeout(function () {
    addNum++;
    console.log(addNum);
    s3.innerHTML = "5초 경과: 콘솔에 999값을 확인하세요";
  }, 5000);
}

// --------------------------------------------------s4
var info = navigator.userAgent.toLowerCase();
var osImg = null;
var scr = screen;
var sc_w = scr.width;
var sc_h = scr.height;

if (info.indexOf("windows") >= 0) {
  osImg = "windows.png";
} else if (info.indexOf("macintosh") >= 0) {
  osImg = "macintosh.png";
} else if (info.indexOf("iphone") >= 0) {
  osImg = "iphone.png";
} else if (info.indexOf("android") >= 0) {
  osImg = "android.png";
}
// document.write('<img src="./images/' + osImg + '">', "<br>");
// document.write("모니터 해상도 너비:" + sc_w + "px", "<br>");
// document.write("모니터 해상도 높이:" + sc_h + "px", "<br>");
s4.innerHTML = `<img src="./images/${osImg}"><br>`;
s4.innerHTML += `모니터 해상도 너비: ${sc_w}px <br>`;
s4.innerHTML += `모니터 해상도 너비: ${sc_h}px <br>`;

// --------------------------------------------------s5
var title;
var desc1, desc2;
var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function () {
  //   document.write("tv 색상: " + this.color, "<br>");
  //   document.write("tv 가격: " + this.price, "<br>");
  title = `<h3>tv 객체 메서드 호출</h3>`;
  desc1 = `tv 색상: ${this.color}<br> tv 가격: ${this.price}<br>`;
  s5.innerHTML = `${title} ${desc1}`;
};

var car = {
  color: "black",
  price: 5000000,
  info: function () {
    // document.write("car 색상: " + this.color, "<br>");
    // document.write("car 가격: " + this.price, "<br>");
    title = `<h3>car 객체 메서드 호출</h3>`;
    desc2 = `car 색상: ${this.color}<br> car 가격: ${this.price}<br>`;
    s5.innerHTML += `${title} ${desc2}`;
  },
};

// document.write("<h1>tv 객체 메서드 호출</h1>");
// tv.info();
// document.write("<h1>car 객체 메서드 호출</h1>");
// car.info();
tv.info();
car.info();

// --------------------------------------------------s6
var phoneNum = "010-2345-1234";
var result_1 = phoneNum.substring(phoneNum.length - 4, 0);
// document.write(result_1, "**** <br>");

var imgSrc = "../images/bnt_out.jpg";
var result_2 = imgSrc.replace("out.jpg", "over.jpg");
// document.write(result_2, "<br>");
s6.innerHTML = `${result_1}**** <br> ${result_2}`;

// --------------------------------------------------s7
var menu = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥"];
var myRand = Math.random();
var menuNum = Math.floor(myRand * menu.length);
var result = menu[menuNum];
// document.write(result);
s7.innerHTML = `${menuNum}번째 메뉴: ${result}당첨 ^^ `;
