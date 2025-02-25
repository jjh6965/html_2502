 
// var d2 = document.querySelector("#d2");

// var tv = new Object();
// tv.color = "white";
// tv.price = 300000;
// tv.info = function () {
//  d2.innerHTML = "tv 색상: " + this.color + "<br>";
//  d2.innerHTML += "tv 가격: " + this.price + "<br>";
// };


// tv.info();

// d2.innerHTML += "";



var d2 = document.querySelector("#d2");

var tv = new Object();
tv.color = "white";
tv.price = 300000;

tv.info1 = function () {
    d2.innerHTML = "TV 색상: " + this.color + "<br>";
    d2.innerHTML += "TV 가격: " + this.price + "원<br>"; // 가격 단위 추가
};

tv.info1(); // TV 정보 표시


var s1 = document.querySelector("#s1");
var div3 = document.createElement("div");
var div3_txt = document.createTextNode("TV의 모델");
div3.appendChild(div3_txt);
s1.appendChild(div3_txt);

// ID가 's1'인 요소 선택
var s1 = document.querySelector("#s1");

// 새 div 요소 생성
var div3 = document.createElement("div");

// 텍스트 노드 생성
var div3_txt = document.createTextNode("TV의 모델");

// 텍스트 노드를 div 요소에 추가
div3.appendChild(div3_txt);

// div 요소를 s1에 추가
s1.appendChild(div3);