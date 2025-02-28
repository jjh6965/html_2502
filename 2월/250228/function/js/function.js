const s1 = document.getElementById("result1");
const s2 = document.getElementById("result2");
const s3 = document.getElementById("result3");
const s4 = document.getElementById("result4");
const s5 = document.getElementById("result5");

const s7 = document.getElementById("result7");
const s8 = document.getElementById("result8");
const s9 = document.getElementById("result9");
const s10 = document.getElementById("result10");
const s11 = document.getElementById("result11");
const s12 = document.getElementById("result12");
const s13 = document.getElementById("result13");

////////////////////////예제.1////////////////////////////////
var count1 = 0;

//함수를 호출한다.
function myFnc1() {
  //정의하고 선언한다.
  for (i = 0; i < 10; i++) {
    count1++;
    s1.innerHTML += "hello" + count1 + "<br>";
  }
}
myFnc1();

///////////////////////////예제.2 //////////////////////////////////
var count2 = 0;

var theFnc = function () {
  if (count2 >= 0) {
    s2.innerHTML += "bye" + count2 + "<br>";
    count2++;
  }
};

var theclear = function () {
  count2 = 0;
  s2.innerHTML = "";
};

/////////////////////////예제.3////////////////////////////////////
var color = ["white", "yellow", "aqua", "purple"];

var i = 0;
function changeColor() {
  i++;
  // i를 0으로 위에서 초기화 후 i를 증가 0 1 2 3 4 5 ...x
  if (i >= color.length) {
    i = 0;
  }
  // 증가된 값이 if문 내부에서 조건이 5일 경우는 다시 초기화 i=0
  s3.style.backgroundColor = color[i];
}

////////////////////예제.4/////////////////////////////////////////

var rightID = "korea";
var rightPw = "1234";

var id = document.getElementById("rightID").value;
var pw = document.getElementById("rightPw").value;

function login() {
  if (id4 === rightID) {
    if (pw4 === rightPw) {
      s4.innerHTML = `${rightID}님 방문을 환영합니다.`;
    } else {
      s4.innerHTML = "잘못된 비밀번호입니다.";
    }
  }
}

////////////////////예제.5/////////////////////

// function testAvg(arrData) {
//   var sum = 0;

//   for (var i = 0; i < arrData.length; i++) {
//     sum += Number(prompt(arrData[i] + "점수는?", "0"));
//   }

//   var avg = sum / arrData.length;
//   return avg;
// }

// var arrSubject = ["국어", "수학"];
// var result5 = testAvg(arrSubject);
// s5.innerHTML = "평균 점수는" + result5 + "점입니다.";

/////////////////예제.6/////////////////////////
var num = 1;
function gallery(direct) {
  if (direct) {
    if (num == 8) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }

  var imgTag = document.getElementById("photo");
  imgTag.setAttribute("src", "./images/pic_" + num + ".jpg");
}

/////////////////예제.7////////////////
var num = 0;
function testFnc() {
  num++;
  s7.innerHTML += num + "<br>";
  if (num == 10) return;

  testFnc();
}

testFnc();

// ///////////////////예제.8//////////////////////
// var num = 100;
// function menu() {
//   num += 100;
//   s8.innerHTML = num + "<br>";
// }
// menu();

// var num = "";
// var num = 100;
// function menu1() {
//   s8.innerHTML += num;
// }
// menu1();

/////////////예제.9/////////////////////
// (function () {
//   var num = 100;
//   function menu2() {
//     num += 100;
//     s9.innerHTML = num;
//   }
//   menu();
// })();

// (function () {
//   var num = 100;
//   function menu2() {
//     alert(num);
//   }
// })();

////////////예제.10////////////////////
function CheckWeight(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.mineWeight;
  this.maxWeight;

  this.getInfo = function () {
    var str = "";
    str += "이름 : " + this.userName + ",";
    str += "키 : " + this.userHeight + ",";
    str += "몸무게 : " + this.userWeight + "<br>";
    return str;
  };

  this.getResult = function () {
    this.mineWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

    if (
      this.userWeight >= this.mineWeight &&
      this.userWeight <= this.mineWeight
    ) {
      return "정상 몸무게입니다.";
    } else if (this.userWeight < this.mineWeight) {
      return "정상 몸무게보다 미달입니다.";
    } else {
      return "정상 몸무게보다 초과입니다.";
    }
  };
}

var jang = new CheckWeight("장보리", 168, 62);
var park = new CheckWeight("박달재", 180, 88);

s10.innerHTML = jang + "<br>";
s10.innerHTML += park + "<br>";
s10.innerHTML += jang.getInfo() + "<br>";
s10.innerHTML += jang.getResult() + "<br>";

//////////////////예제.11/////////////////////
function CheckWeight1(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.mineWeight;
  this.maxWeight;

  CheckWeight1.prototype.getInfo = function () {
    var str = "";
    str += "이름 : " + this.userName + ",";
    str += "키 : " + this.userHeight + ",";
    str += "몸무게 : " + this.userWeight + "<br>";
    return str;
  };

  CheckWeight1.prototype.getResult = function () {
    this.mineWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

    if (
      this.userWeight >= this.mineWeight &&
      this.userWeight <= this.mineWeight
    ) {
      return "정상 몸무게입니다.";
    } else if (this.userWeight < this.mineWeight) {
      return "정상 몸무게보다 미달입니다.";
    } else {
      return "정상 몸무게보다 초과입니다.";
    }
  };
}

var jang = new CheckWeight1("장보리", 168, 62);
var park = new CheckWeight1("박달재", 180, 88);

s11.innerHTML = jang + "<br>";
s11.innerHTML += park + "<br>";
s11.innerHTML += jang.getInfo() + "<br>";
s11.innerHTML += jang.getResult() + "<br>";
s11.innerHTML += jang.getResult === park.getResult;

///////////////////////////////예제.12////////////////////////////////
function sumFnc_1(num1, num2) {
  return num1 + num2;
}
s12.innerHTML = sumFnc_1(1, 2) + "<br>";

const sumFnc_2 = (num1, num2) => num1 + num2;
s12.innerHTML += sumFnc_2(10, 20) + "<br>";

const sumFnc_3 = (num1, num2) => {
  const result = `num1 + num2 = ${num1 + num2}`;
  return result;
};
s12.innerHTML += sumFnc_3(100, 200) + "<br>";

const infoFnc_1 = function (info1, info2) {
  return { name: info1, age: info2 };
};
s12.innerHTML += infoFnc_1("홍길동", 22) + "<br>";

const infoFnc_2 = (info1, info2) => ({ name: info1, age: info2 });
s12.innerHTML += infoFnc_1("최군", 32) + "<br>";

///////////////////////예제. 13//////////////////////////////////////

const obj_1 = {
  name: "홍길동",
  infoFnc: function () {
    s13.innerHTML = this + "<br>";
    const innerFnc = () => {
      (s13.innerHTML += "메서드 내의 화살표 함수: "), this;
    };
    innerFnc();
  },
};

obj_1.infoFnc();

const obj_2 = {
  name: "홍대리",
  infoFnc: () => {
    s13.innerHTML = this + "<br>";
    const innerFnc = () => {
      s13.innerHTML = "화살표 함수 메서드에 함수 : " + this;
    };
    innerFnc();
  },
};

obj_2.infoFnc();

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", function () {
  s13.innerHTML = this;
});

btn2.addEventListener("click", () => {
  s13.innerHTML = this;
});
