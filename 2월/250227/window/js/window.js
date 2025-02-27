const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");

const s5 = document.querySelector(".s5");
const s6 = document.querySelector(".s6");
// window.open(
//   "https://www.w3schools.com/",
//   "w3schools",
//   "width=350, height= 400, left=50,top=50,scrollbars =no"
// );

////////////////////////////////예제.2////////////////////////////////////////
window.open("window2.html", "pop1", "width=300,height=400,left=300,top=50");

////////////////////////////////예제.3//////////////////////////////////////

var addNum = 0;
var subNum = 1000;

var auto_1 = setInterval(function () {
  addNum++;
  p3.innerHTML = "addNum :" + addNum;

  //   console.log("addNum: " + addNum);
}, 1000);

// 지정시간 단위로 카운터가 올라간다.

function sbtn1() {
  setInterval(function () {
    addNum++;
    p3.innerHTML = "addNum :" + addNum;
  }, 1000);
}

var auto_2 = setInterval(function () {
  subNum--;
  p4.innerHTML = "subNum :" + subNum;
  // console.log("subNum: " + subNum);
}, 1000);

function sbtn2() {
  setInterval(function () {
    subNum--;
    p4.innerHTML = "subNum :" + subNum;
  }, 1000);
}

////////////////////////////예제.4////////////////////////////////////////

var addNum4 = 0;
var auto = setTimeout(function () {
  addNum4++;
  p5.innerHTML = "addNum4 : " + addNum4;
}, 5000);

////////////////////////예제.5////////////////////////////////////
var info = navigator.userAgent.toLowerCase();
var osImg = null;

if (info.indexOf("windows") >= 0) {
  osImg = "windows.png";
} else if (info.indexOf("macintosh") >= 0) {
  osImg = "macintosh.png";
} else if (info.indexOf("iphone") >= 0) {
  osImg = "iphone.png";
} else if (info.indexOf("android") >= 0) {
  osImg = "android.png";
}

var scr = screen;
var sc_w = scr.width;
var sc_h = scr.height;
s5.innerHTML = `<img src="./images/${osImg}"><br>`;
s5.innerHTML += "모니터 해상도 너비: " + sc_w + "px" + "<br>";
s5.innerHTML += "모니터 해상도 높이: " + sc_h + "px" + "<br>";

/////////////////////////예제.6////////////////////////////////////////
var phoneNum = "010-2345-1234";
var result_1 = phoneNum.substring(0,9);
s6.innerHTML = result_1 + "****" + "<br>";

var imgSrc = "images/bnt_out.jpg";
var result_2 = imgSrc.replace("out","over");
s6.innerHTML += result_2 ;
