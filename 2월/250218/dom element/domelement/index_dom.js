//예제.1
const x1 = document.getElementById("intro");
//id=intro인 p태그 "Finding HTML Elements by Id"를 element 변수에 담았다.
document.getElementById("demo1").innerHTML =
  "js : The text from the intro paragraph is: " + x1.innerHTML;
//id=demo인 p태그의 html문서 안에  " " +  변수의 innerHtml; 출력

//예제.2
const x2 = document.getElementsByTagName("p");
document.getElementById("demo2").innerHTML =
  "js : The text in first paragraph (index 0) is: " + x2[0].innerHTML;
// p태그 네임의 값을 element2의 변수에 할당하고 demo2의 html에 변수의 첫번째 배열 출력

//예제.3
const x3 = document.getElementById("main");
const y3 = x3.getElementsByTagName("p");
document.getElementById("demo3").innerHTML =
  'js : The first paragraph (index 0) inside "main" is: ' + y3[0].innerHTML;
// x3변수에 id가 main인 값을 할당하고 
// y3변수에는 x3변수 중 태명이 p인 변수의 1번째 태그를 할당
//문서의 id demo3인 태그에 출력

//예제.4
const x4 = document.getElementsByClassName("intro4");
document.getElementById("demo4").innerHTML =
  'The first paragraph (index 0) with class="intro" is: ' + x4[0].innerHTML;
//class이름이 intro인 class를 x4 변수에 할당
//문자열+class intro의 1번째를 출력

 