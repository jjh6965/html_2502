var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var s3 = document.querySelector(".s3");
var s4 = document.querySelector(".s4");
var s5 = document.querySelector(".s5");

var arr = [30, "따르릉", true];
s1.innerHTML = "<h3>예제.1</h3>";
// document.write("<h3>배열값 가져오기-1</h3>");

//h3태그 "배열값 가져오기"
//document.write(arr[0], "<br>");
s1.innerHTML += arr[0] + "<br>";
// 30
//document.write(arr[1], "<br>");
s1.innerHTML += arr[1] + "<br>";
//"따르릉"
//document.write(arr[2], "<br>");
s1.innerHTML += arr[2] + "<br>";
//true

//document.write("<h3>배열값 가져오기-1</h3>");
for (var i = 0; i < arr.length; i++) {
  s1.innerHTML += arr[i] + "<br>";
  // document.write(arr[i] + "<br>");
  // 0 1 2  = i의 길이 3
  // 30 , "따르릉" , true 출력
}

// document.write("<h3>배열값 가져오기-1</h3>");
for (i in arr) {
  //  document.write(arr[i], "<br>");
  s1.innerHTML += arr[i] + "<br>";
  //arr 배열 안의 i는 arr[0],arr[1],arr[2] 출력
}

s2.innerHTML = "<h3>예제2</h3>";

var arr_1 = ["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];
//1
var result = arr_1.join("-");
//console.log(result);
s2.innerHTML += result + "<br>";
//2
result = arr_1.concat("arr_2");
//console.log(result);
s2.innerHTML += result + "<br>";
//3
var result = arr_1.slice(1, 3);
//console.log(arr_1);
s2.innerHTML += result + "<br>";

arr_2.reverse();
//console.log(arr_2);
//4
s2.innerHTML += arr_2 + "<br>";

s3.innerHTML = "<h3>예제.3</h3>";
//예제.3
var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

//console.log(greenArr);
s3.innerHTML += greenArr + "<br>";
greenArr.splice(2, 1, "서초", "역삼");
//console.log(greenArr);
s3.innerHTML += greenArr + "<br>";

var data1 = yellowArr.pop();
var data2 = yellowArr.shift();

yellowArr.push(data2);
//console.log(yellowArr);
s3.innerHTML += yellowArr + "<br>";

yellowArr.unshift(data1);
//console.log(yellowArr);
// 3.44
s3.innerHTML += yellowArr + "<br>";

s4.innerHTML = "<h3> 예제.4 </h3>";
// index 값
// t= 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
// char 값
// t= H e l l o   T h a n k      y o  u     g  o  o  d     l  u  c  k     t  o     y  o  u
var t = "Hello Thank you good luck to you";

s4.innerHTML += t.charAt(16) + "<br>";
//document.write(t.charAt(16), "<br>");
// 문자열 내부에서 띄어쓰기 포함하여 16번째 = "g"

s4.innerHTML += t.indexOf("you") + "<br>";
//document.write(t.indexOf("you"), "<br>");
// you의 인덱스는 어디냐 ? ?  앞의 12번쨰 처음 "you"

s4.innerHTML += t.indexOf("you", 16) + "<br>";
//document.write(t.indexOf("you", 16), "<br>");
// 문자열 you를 16번째로 넘겨준다. 앞의 12번쨰 "you"를 넘기고 16번 포지션 이후로 "you"를 찾는다.

s4.innerHTML += t.lastIndexOf("you") + "<br>";
//document.write(t.lastIndexOf("you"), "<br>");
// 문자열 you를 뒤에서 부터

s4.innerHTML += t.lastIndexOf("you", 25) + "<br>";
//document.write(t.lastIndexOf("you", 25), "<br>");
// 문자열 "you"를 25포지션 부터 뒤에서

s4.innerHTML += t.match("luck") + "<br>";
//document.write(t.match("luck"), "<br>");
// 어디 있는지는 모르지만 "luck"의 인덱스 값을 반환한다.

s4.innerHTML += t.search("you") + "<br>";
//document.write(t.search("you"), "<br>");
//"You"의 시작 인덱스 값을 반환한다.

s4.innerHTML += t.substr(21, 4) + "<br>";
//document.write(t.substr(21, 4), "<br>");
// 21번쨰 l 부터 4자리를 반환 = lcuk;

s4.innerHTML += t.substring(6, 12) + "<br>";
//document.write(t.substring(6, 12), "<br>");
// 6번째 T부터 12번 전까지 반환 = "Thank";

s4.innerHTML += t.replace("you", "me") + "<br>";
//document.write(t.replace("you", "me"), "<br>");
// "you"와 "me"의 char 값을 교체

s4.innerHTML += t.toLowerCase() + "<br>";
//document.write(t.toLowerCase(), "<br>");
// 소문자로 반환

s4.innerHTML += t.toUpperCase() + "<br>";
//document.write(t.toUpperCase(), "<br>");
// 대문자로 반환

s4.innerHTML += t.length + "<br>";
//document.write(t.length, "<br>");
// 문자열의 길이

s5.innerHTML = "<h3>예제.5</h3>";
var s = t.split("");
// split는 "" = 공백을 기준으로 나눈다.
// t의 공백의 갯수가 몇개인지

s5.innerHTML += s[0] + " <br>";
//document.write(s[0], "<br>");
// 첫 ""이후 다음 "" 전까지의 인덱스를 반환

s5.innerHTML += s[4] + "<br>";
//document.write(s[4], "<br>");
// 4번쨰 ""이후의 인덱스를 반환

var str = "A";
var t = str.charCodeAt(0);
s5.innerHTML += t + "<br>";
//document.write(t, "<br>");
//대문자 A의 charCodeAt은 값이 65로  65로 반환한다.

s5.innerHTML += String.fromCharCode(65) + "<br>";
//document.write(String.fromCharCode(65), "<br>");
// 문자열의 fromCharCode65는 A이기 때문에 문자'A'를 반환한다.
