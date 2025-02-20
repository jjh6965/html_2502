// var site = prompt(
//   "네이버, 다음, 네이트, 구글 중 즐겨 사용하는 포털 검색 사이트는?"
// );
// var url;

// switch (site) {
//   // 스위치 함수의 site 값이 참이면(입력 값이 들어가면~) {}로 접근하고 내부에서 case값이 일치하는
//   // 것을 찾는다.
//   case "구글":
//     url = "https://www.google.com/?hl=ko";
//     break;
//   case "다음":
//     url = "https://www.daum.net/";
//     break;
//   case "네이버":
//     url = "https://www.naver.com/";
//     break;
//   case "네이트":
//     url = "https://m.nate.com/";
//     break;
//   // 만약 찾았으면 해당 case 행을 실행 후 break이후 종료
//   default:
//     alert("보기 중에 없는 사이트입니다.");
//   // 값을 못 찾았다면 default를 실행 후 마지막으로 빠져나온다.
// }

// // if (url) location.href = "http://" + url;
// // url 변수를 선언하고 만약 url 조건 값이 참이면 지역 링크는 http+url 변수에 할당.
// if (url) {
//   window.open(url, "_blank");
// }
// // url의 할당이 참이면 윈도우의 오픈객체를 선언하고 (링크를 새창으로 연다. )

//예제.2
var i2 = 1;
while (i2 <= 10) {
  document.getElementById("demo2").innerHTML += "안녕하세요." + i2 + "<br>";
  //  document.getElementById("demo2").innerHTML += "안녕하세요." + i2 + "<br>";
  //=  document.getElementById("demo2").innerHTML = document.getElementById("demo2").innerHTML + "안녕하세요." + i2 + "<br>";
  //   document.write("안녕하세요." + i2, "<br>");
  //  write로 쓰게되면 출력이 지속 된다 ? ??
  i2++;
  //i2의 값을 1씩 증가 시킨다.
}

//예제.3
var i3 = 1;
while (i3 <= 30) {
  if (i3 % 2 == 0 && i3 % 6 == 0) {
    // document.write(i3, "<br>");
    // 2의 배수와 6의 배수 의 2 조건이 참일 떄
    document.getElementById("demo3").innerHTML += i3 + "<br>";
  }
  i3++;
  // 초기값 부터 1씩 증가
}
//예제.4
var i4 = 20;
while (i4 >= 10) {
  // 초기값이 20 참이고 {} 들어가서
  if (i4 % 2 == 0) {
    // document.write("<p class=`blue`>" + i4 + "</p>");
    document.getElementById("demo4").innerHTML +=
      "<p#demo4 style = 'color :red'>" + i4 + "<br>";
    // 2의 배수일때 출력,짝수일때 빨간색 숫자
  } else {
    // document.write("<p class=`red`>" + i4 + "</p>");
    document.getElementById("demo4").innerHTML +=
      "<p#demo4 style = 'color : blue'>" + i4 + "<br>";
    // 홀수이면 출력 ,짝수일때 파란색 숫자
  }
  i4--;
  // -감소
}

//예제.5
var i5 = 10;
do {
  //   document.write("hello!");
  // if (i5>=10){
  //   --i5;
  // }
  document.getElementById("demo5").innerHTML += "hello! <br>";
} while (i5 < 5);
{
}
// 보통은 초기값으로 들어가지만 do while은 우선 들어가서 실행을 우선으로 한다.
//do{}while{}문은 do를 먼저 실행한 후에 while문으로 실행이 되지만 wihle문이 참이면 다시 do를 선실행한다.

//예제.6
for (var i6 = 1; i6 <= 10; i6++) {
  // document.write("반복" + i5, "<br>");
  document.getElementById("demo6").innerHTML += "반복" + i6 + "<br>";
}

//예제.7
for (var i7 = 1; i7 <= 100; i7++) {
  if (i7 % 5 == 0 && i7 % 7 != 0) {
    document.getElementById("demo7").innerHTML +=
      "<p#demo7 style = 'color : red';>" + i7 + "<br>";
  } else if (i7 % 7 == 0 && i7 % 5 != 0) {
    document.getElementById("demo7").innerHTML +=
      "<p#demo7 style = 'color : blue';>" + i7 + "<br>";
    +i7 + "<br>";
  } else if (i7 % 7 == 0 && i7 % 5 == 0) {
    document.getElementById("demo7").innerHTML +=
      "<p#demo7 style = 'color : green';>" + i7 + "<br>";
    i7 + "<br>";
  }
}

//예제.8
for (var i8 = 1; i8 <= 10; i8++) {
  if (i8 == 6) break;
  document.getElementById("demo8").innerHTML += i8 + "<br>";
}
document.getElementById("demo8").innerHTML += "=========== The End ==========";

//예제.9
for (var i9 = 1; i9 <= 10; i9++) {
  if (i9 % 2 == 0) continue;
  document.getElementById("demo9").innerHTML += i9 + "<br>";
}
document.getElementById("demo9").innerHTML += "=========== The End ==========";

//예제.10
for (var i10 = 1; i10 <= 3; i10++) {
  for (var k10 = 1; k10 <= 2; k10++) {
    document.getElementById("demo10").innerHTML +=
      i10 + "행" + k10 + "열" + "<br>";
  }
  document.getElementById("demo10").innerHTML += "<br>";
}

// document.getElementById("demo11").innerHTML += "안" + "<br>";
// document.getElementById("demo11").innerHTML += "녕" + "<br>";
// document.getElementById("demo11").innerHTML += "하" + "<br>";
// document.getElementById("demo11").innerHTML += "세" + "<br>";
// document.getElementById("demo11").innerHTML += "요" + "<br>";

// document.write("안1" + "녕", "<br>");
// document.write("안2", "녕", "<br>");
// document.write("안3" + "녕" + "<br>");
// document.write("안4" + "<br>");

var s11 = 1;
while (s11 < 10) {
  document.getElementById("demo11").innerHTML +=
    "5X" + s11 + "=" + s11 * 5 + "<br>";
  s11++;
}

// for (i = 1; i < 10; i++) {
//   document.getElementById("demo11").innerHTML +=
//     "5X" + i + "=" + i * 5 + "<br>";
//}

var num12 = 1;
var t = "<table border = 1>";
for (i12 = 1; i12 < 6; i12++) {
  t += "<tr>";

  for (j12 = 1; j12 < 6; j12++) {
    t += "<td>" + num12 + "</td>";
    num12++;
  }

  t += "</tr>";
}
t += "</table>";
document.getElementById("demo12").innerHTML = t;
