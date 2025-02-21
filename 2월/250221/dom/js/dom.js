var d = document;

//예제.1
d.getElementById("demo1").innerHTML = "창 위치 Href : " + window.location.href;

//예제.2
d.getElementById("demo2").innerHTML =
  "창 위치 호스트 이름 : " + window.location.hostname;

//예제.3
d.getElementById("demo3").innerHTML =
  "창 위치 경로 이름 : " + window.location.pathname;

//예제.4
d.getElementById("demo4").innerHTML =
  "창 위치 프로토콜 : " + window.location.protocol;

//예제.5
d.getElementById("demo5").innerHTML = "창 위치 포트 :  " + window.location.port;

//예제.6
d.getElementById("demo6").innerHTML = "창 위치 지정 : " + window.location.port;

//예제.7
function newDoc() {
  window.location.assign("https://www.coupang.com/");
}

//예제.8
d.getElementById("demo8").innerHTML = " " + window.location.port;

//예제.9
function goBack() {
  window.history.back();
}

//예제.10
function goForward() {
  window.history.forward();
}

//예제.11
d.getElementById("demo11").innerHTML =
  "브라우저 쿠키 사용 가능 : " + navigator.cookieEnabled;

//예제.12
d.getElementById("demo12").innerHTML =
  "브라우저 애플리케이션 이름" + navigator.appName;

//예제.13
d.getElementById("demo13").innerHTML =
  "브라우저 응용 프로그램 코드 " + navigator.appCodeName;

//예제.14
d.getElementById("demo14").innerHTML = " 브라우저 엔진 " + navigator.product;

//예제.15
d.getElementById("demo15").innerHTML = "브라우저 버전: " + navigator.appVersion;

//예제.16
d.getElementById("demo16").innerHTML =
  "브라우저 에이전트:" + navigator.userAgent;

//예제.17
d.getElementById("demo17").innerHTML = "브라우저 플랫폼 " + navigator.platform;

//예제.18
d.getElementById("demo18").innerHTML = "브라우저 언어" + navigator.language;

//예제.19
d.getElementById("demo19").innerHTML =
  "브라우저 온라인 상태 " + navigator.onLine;

//예제.20
d.getElementById("demo20").innerHTML =
  "java 활성화 상태 " + navigator.javaEnabled();

//예제.21
function myFunction1() {
  alert("Hello");
}

//예제.22
function myFunction2() {
  alert("Hello");
}

//예제.23
setInterval(myTimer1, 1000);

function myTimer1() {
  const d2 = new Date();
  d.getElementById("demo23").innerHTML = d2.toLocaleTimeString();
}

//예제.24
let myVar = setInterval(myTimer2, 1000);
function myTimer2() {
  const d3 = new Date();
  document.getElementById("demo24").innerHTML = d3.toLocaleTimeString();
}

//예제.25
let x = document.cookie;
document.cookie =
  "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
