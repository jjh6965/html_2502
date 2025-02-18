//예제.1
const x1 = document.getElementById("intro");
//id=intro인 p태그 "Finding HTML Elements by Id"를 element 변수에 담았다.
document.getElementById("demo1").innerHTML = "js : text : " + x1.innerHTML;
//id=demo인 p태그의 html문서 안에  " " +  변수의 innerHtml; 출력

//예제.2
const x11 = document.getElementById("main0");
const x2 = x11.getElementsByTagName("p");

// document.getElementById("demo22").innerHTML = x2.length;
document.getElementById("demo2").innerHTML = "js : text : " + x2[0].innerHTML;
// p태그 네임의 값을 element2의 변수에 할당하고 demo2의 html에 변수의 첫번째 배열 출력

//예제.3
const x3 = document.getElementById("main");
const y3 = x3.getElementsByTagName("p");
document.getElementById("demo3").innerHTML = "js : text : " + y3[0].innerHTML;

//예제.4
const x4 = document.getElementsByClassName("intro4");
document.getElementById("demo4").innerHTML = "js : text : " + x4[0].innerHTML;

//예제.5
const x5 = document.querySelectorAll("p.intro5");
document.getElementById("demo5").innerHTML = "js : text : " + x5[0].innerHTML;
//문서에 p의 intro5의 전체를 x5 변수에 할당
// x5의 첫번째인  Hellowrld!.를 출력

//예제.6
const x6 = document.forms["frm1"];
let text = "";
for (let i = 0; i < x6.length; i++) {
  text += x6.elements[i].value + "<br>";
}
document.getElementById("demo6").innerHTML = text;
//문서의 forms[] = form의 전체 요소 값을 x 변수에 할당
//forms[] = form태그의
//for문은 변수의 값이 변동되기 때문에 const가 아닌 let 변수로 선언
// text변수의 값은 ""로 할당
//  []는 form 태그 자식 중 전체 속성
//x의 길이는 0,1,2 = 3
// i=0일 때 text = "Donald"
// i=1일 때 text = "Donald"+"<br>""+"Duck"
// i=2일 떄 text = "Donald"+"<br>"+ "Duck"+<br> + "Sumbit"+<br>후
// for문 종료.
//demo6에 할당 값은 text 변수 값

