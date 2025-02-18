// 예제.1 산술 연산자
var num1 = 15;
var num2 = 2;
var result;
result = num1 + num2;
document.getElementById("demo1").innerHTML = result + "<br>";

result = num1 - num2;
document.getElementById("demo2").innerHTML = result + "<br>";

result = num1 * num2;
document.getElementById("demo3").innerHTML = result + "<br>";

result = num1 / num2;
document.getElementById("demo4").innerHTML = result + "<br>";

result = num1 % num2;
document.getElementById("demo5").innerHTML = result + "<br>";

// 예제.2
var t1 = "학교종이";
var t2 = " 땡땡떙 ";
var t3 = 8282;
var t4 = " 어서 모이자";
var result1;
result1 = t1 + t2 + t3 + t4;
// document.write(result + "<br><br>");
document.getElementById("demo6").innerHTML = result1 + "<br>";

// 예제.3
const year = 2002;
const country = "대한민국";
const everyName = "월드컵";
const str_1 = `${year}년 ${country} ${everyName} 개최<br><br>`;
// document.write(str_1);
document.getElementById("demo7").innerHTML = str_1 + "<br>";

// 예제.4
const age = 10;
const afterYear = 100;
const str_2 = `현재 나이는 ${age}살이지만<br>${afterYear}년 후에는 
${age + afterYear}살이 됩니다.`;
document.getElementById("demo8").innerHTML = str_2;

// 예제.5 증감 연산자
var num1 = 10;
var num2 = 3;

num1 += num2;
document.getElementById("demo9").innerHTML = num1 + "<br>";
num1 -= num2;
document.getElementById("demo10").innerHTML = num1 + "<br>";
num1 *= num2;
document.getElementById("demo11").innerHTML = num1 + "<br>";
num1 /= num2;
document.getElementById("demo12").innerHTML = num1 + "<br>";
num1 %= num2;
document.getElementById("demo13").innerHTML = num1 + "<br>";

// 예제.6 증감 연산자 ( 값 중복 제거)
var num1 = 10;
var num2 = 3;

num1 += num2;
document.getElementById("demo14").innerHTML = num1 + "<br>";
var num1 = 10;
var num2 = 3;
num1 -= num2;
document.getElementById("demo15").innerHTML = num1 + "<br>";
var num1 = 10;
var num2 = 3;
num1 *= num2;
document.getElementById("demo16").innerHTML = num1 + "<br>";
var num1 = 10;
var num2 = 3;
num1 /= num2;
document.getElementById("demo17").innerHTML = num1 + "<br>";
var num1 = 10;
var num2 = 3;
num1 %= num2;
document.getElementById("demo18").innerHTML = num1 + "<br>";

// 예제.7 테이블 만들기
var str = "<table border='1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";
document.getElementById("demo19").innerHTML = str + "<br>";

// 예제.8 증감연산자
var num1 = 10;
var num2 = 20;
var result;

num1--;
document.getElementById("demo20").innerHTML = num1 + "<br>";

num1++;
document.getElementById("demo21").innerHTML = num1 + "<br>";

result = num2++;
document.getElementById("demo22").innerHTML = result + "<br>";
//num2값은 1이 증가됨.
document.getElementById("demo23").innerHTML = num2 + "<br>";

result = ++num2;
document.getElementById("demo24").innerHTML = result + "<br>";

//예제.9 비교연산자
var a = 10;
var b = 20;
var c = 10;
var f = "20";
var result;

result = a > b;
document.getElementById("demo25").innerHTML = result + "<br>";

result = a < b;
document.getElementById("demo26").innerHTML = result + "<br>";

result = a <= b;
document.getElementById("demo27").innerHTML = result + "<br>";

result = b == f;
document.getElementById("demo28").innerHTML = result + "<br>";

result = a != b;
document.getElementById("demo29").innerHTML = result + "<br>";

result = b === f;
document.getElementById("demo30").innerHTML = result + "<br>";

//예제.10 논리 연산자
var a = 10;
var b = 20;
var m = 30;
var n = 40;
var p = "40";

var result;
result = a > b || b >= m || m > n;
document.getElementById("demo31").innerHTML = result + "<br>";
//false x x x
result = a > b || b >= m || m <= n;
document.getElementById("demo32").innerHTML = result + "<br>";
//true x x o
result = (a <= b && b >= m) || m <= n;
document.getElementById("demo33").innerHTML = result + "<br>";
//true(o & x = o ) o
result = a <= b && b <= m && m <= n;
document.getElementById("demo34").innerHTML = result + "<br>";
//true o o o
result = !(a > b);
document.getElementById("demo35").innerHTML = result + "<br>";
//true
result = p == n;
document.getElementById("demo36").innerHTML = result + "<br>";

// ?boolean
var a = 10;
var b = 3;
var result = a > b ? "javascript" : "hello";
document.getElementById("demo37").innerHTML = result + "<br>";
var result1 = a < b ? "tr" : "fa";
document.getElementById("demo38").innerHTML = result1 + "<br>";
// a와b 중 참이면 javascript 거짓이면 hello

//연산 우선순위
var userHeight = 180;
var userWeigt = 74;
var normal_w = (userHeight - 100) * 0.9;
document.getElementById("demo39").innerHTML = normal_w + "<br>";
//()의 값을 선행 계산 후 normal_w 변수에  할당

//적정 체중
// var name1 = prompt("당신의 이름은?", "");
// var height = prompt("당신의 신장은?", "0");
// var weight = prompt("당신의 체중은?", "0");
// //prompt창의 내용을 입력하여 변수에 할당
// var normal_n = (height - 100) * 0.9;
// var result = weight >= normal_n - 5 && weight <= normal_n + 5;
// result = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";
// /* document.getElementById("demo40").innerHTML = name1 + " 님은 " + result ;
// innerHTML은 입력 값은 가져올수 없다.*/

// // normal_w 5차이로 크거나 같을때 = result
//  document.write(name1+" 님은 "+result); 

// //연습문제.1
//  //만원 초과 시 000원 초과 아닐 경우 돈관리를 잘했어요!
//  var price1 = 3000;
//  //교통비
//  var price2 = 6000;
//  //식비
//  var price3 = 1000;
//  //음료비
//  var priceal = price1 + price2 + price3 ;
//  var pricen = priceal - 10000; 
//  var result = priceal <= 10000 ? "돈관리를 잘했어요!" : pricen+"원 초과";
//  document.write(result);

var a = 1000;
var b = 1000;
var c = 1000;
var p = prompt("4분기 판매량은?", "");
var aver = (a + b + c) / 3;
var result = p >= aver ? "판매량이 평균 이상입니다." : "판매량이 평균 미달입니다.";
// document.write(result);
console.log(result);