// document.getElementById("p1").innerHTML =

//예제.1
var num1 = 10;
if (num1 < 500) {
  document.getElementById("p1").innerHTML = "hello" + "<br>";
}

//예제.2
var walkAmount = prompt("2번 당신의 하루 걷는 양은 몇 보 인가요?", "0");

if (walkAmount >= 10000) {
  // document.write("매우 좋은 습관을 지니고 계시는군요!!","<br>");
  document.getElementById("p2").innerHTML =
    "매우 좋은 습관을 지니고 계시는군요!!" + "<br>";
}
document.getElementById("p22").innerHTML = "END" + "<br>";
//예제.3
var min = prompt("3번 당신의 하루 통화량은 몇 분인가요?", "0");
if (min >= 60) {
  document.getElementById("p3").innerHTML = "많이 사용하는 편이네요." + "<br>";
}
document.getElementById("p33").innerHTML = "END" + "<br>";
//예제.4
var num4 = 3;
if (num4) {
  document.getElementById("p4").innerHTML = num4;
}
//예제.5
var num5 = 0;
if (num5) {
  document.getElementById("p5").innerHTML = num5;
}
//예제.6
var username = prompt("6번 방문자의 이름은?", "");
if (username) {
  document.getElementById("p6").innerHTML =
    username + "님 반갑습니다!방문을 환영합니다.";
}
//예제.7
var num7 = prompt("7번 당신이 좋아하는 숫자는?", "0");
if (num7 % 2 == 0) {
  document.getElementById("p7").innerHTML =
    "당신이 좋아하는 숫자는 짝수입니다.";
} else {
  document.getElementById("p7").innerHTML =
    "당신이 좋아하는 숫자는 홀수입니다.";
}
//예제.8
confirm("8번.massage");

//예제.9
var user9 = "9번";
var result9 = confirm(user9 + "님 정말로 회원을 탈퇴하시겠습니까?");
if (result9) {
  alert("9번 탈퇴 완료되었습니다.");
} else {
  alert("9번 취소되었습니다.");
}

//예제.10
var result10 = confirm("10번님 정말로 회원을 탈퇴하시겠습니까?");

if (result10) {
  document.getElementById("p10").innerHTML = "10번 탈퇴 처리되었습니다!";
} else {
  document.getElementById("p10").innerHTML = "10번 탈퇴 취소되었습니다!";
}

//예제.11
var mon = prompt("현재는 몇 월입니까?", "0");
if (mon >= 9 && mon <= 11) {
  document.getElementById("p11").innerHTML = "독서의 계절 가을이네요!!";
} else if (mon >= 6 && mon <= 8) {
  document.getElementById("p11").innerHTML = "여행가기 좋은 여름이네요!!";
} else if (mon >= 3 && mon <= 5) {
  document.getElementById("p11").innerHTML = "햇살 가득한 봄이네요!!";
} else if (mon >= 1 && mon <= 2 && mon == 12) {
  document.getElementById("p11").innerHTML = "스키의 계절 겨울이네요!!";
} else {
  document.getElementById("p11").innerHTML = "정확한 값이 아닙니다.";
}

//예제.12
var id = "wjdwogns";
var pw = "1210";

var user_id = prompt("아이디는?", "");
var user_pw = prompt("비밀번호는?", "");

if (id == user_id) {
  if (pw == user_pw) {
    alert(user_id + "님 반갑습니다.");
  } else {
    // alert("비밀번호가 일치하지 않습니다.");
    document.getElementById("p12").innerHTML = "비밀번호가 일치하지 않습니다.";
  }
} else {
  // alert("아이디가 일치하지 않습니다.");
  document.getElementById("p12").innerHTML = "아이디가 일치하지 않습니다..";
}

//예제.13
let num13 = 10;
let user13 = "홍길동";

//전역 num13 = 10
if (num13 > 5) {
  // 참
  let num13 = 50;
  //지역 num13 = 50
  num13 = num13 + 10;
  //60
}
document.write(`${num13} <br>`);

if (user13 != "") {
  user13 = "김길동";
}
document.write(`${user13} <br>`);
