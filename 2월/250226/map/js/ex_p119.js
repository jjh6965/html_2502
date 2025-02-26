var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var s3 = document.querySelector(".s3");
var s4 = document.querySelector(".s4");
var s5 = document.querySelector(".s5");
var s6 = document.querySelector(".s6");
var s7 = document.querySelector(".s7");
var s8 = document.querySelector(".s8");
var s9 = document.querySelector(".s9");

function ex0() {
  var inputValue1 = document.getElementsByClassName("input")[0].value;
  var upperName1 = inputValue1.toUpperCase();
  document.getElementsByClassName("output")[0].innerHTML = upperName1;
}

document.getElementsByClassName("btn")[0].addEventListener("click", ex0);

//예제 1.///////////////////////////////////////////////////////////
//var userName1 = prompt("당신의 영문 이름은?", "");
// var userName1 = "정재훈";
// s1.innerHTML = upperName1 + "<br>";

function ex1() {
  var inputValue2 = document.getElementsByClassName("input")[1].value;
  var result2 = inputValue2.substring(0, inputValue2.length - 4) + "****";
  document.getElementsByClassName("output")[1].innerHTML = result2;
}
document.getElementsByClassName("btn")[1].addEventListener("click", ex1);

// // var userNum1 = prompt("당신의 연락처는?", "");
// var userNum1 = "12345678";
// var result1 = userNum1.substring(0, userNum1.length - 4) + "****";
// s1.innerHTML += result1 + "<br>";

function ex2() {
  var inputValue3 = document.getElementsByClassName("input")[2].value;

  var check1 = false;
  var check2 = false;
  var arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

  if (inputValue3.indexOf("@") > 0) {
    check1 = true;
  }

  for (var i = 0; i < arrUrl.length; i++) {
    if (inputValue3.indexOf(arrUrl[i] > 0)) {
      check2 = true;
    }
  }

  if (check1 && check2) {
    document.getElementsByClassName("output")[2].innerHTML = inputValue3;
  } else {
    alert("이메일 형식이 잘못되었습니다.");
  }
}
document.getElementsByClassName("btn")[2].addEventListener("click", ex2);

// //예제.2
// var userEmail2 = prompt("당신의 이메일 주소는?", " ");
// //var userEmail2 = "wjdwogns@.co.kr";
// var arrUrl2 = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

// var check1 = false;
// var check2 = false;

// if (userEmail2.indexOf("@") > 0) {
//   check1 = true;
// }
// // indexOf("@") : 0 1 2 3 4 로 가는데 0 번쨰에 오면 false
// // *@이상이여야 true

// for (var i = 0; i < arrUrl2.length; i++) {
//   if (userEmail2.indexOf(arrUrl2[i] > 0)) {
//     check2 = true;
//   }
// }

// if (check1 && check2) {
//   s2.innerHTML = userEmail2;
// } else {
//   alert("이메일 형식이 잘못되었습니다.");
// }

//예제.3
const contry = ["영어", "중국어"];
const subjects = ["쓰기", "말하기"];
const myMap = new Map();

for (let i = 0; i < contry.length; i++) {
  myMap.set(contry[i], []);
  //비어있는 맵에 설정 . set = 값 설정 . 영어,[] / 중국어,[]
  for (let k = 0; k < subjects.length; k++) {
    myMap.get(contry[i]).push(`${contry[i]}에 ${subjects[k]} 점수는?`);
    // 비어있는 변수에 set에 값을 얻고 거기에 푸쉬의 내용을 넣는다.
  }
}

s3.innerHTML += myMap.get("영어") + "<br>";
s3.innerHTML += myMap.get("중국어") + "<br>";

//예제.4
const users = {
  userA: [50, 60, 100],
  userB: [80, 90, 70],
  userC: [75, 80, 90],
};
//객체를 "users"에 할당한다.
const { userA, userB } = users;
//users의 객체의 name : value를 const{userA , user B}에 할당.
//[50,60,100],[80,90,70] ;
const arr = [...userA, ...userB];
// ...은 배열의 전개 문법으로 배열을 합치는 용도 (?)
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
s4.innerHTML = `userA와 userB의 점수 합계는 ${sum}점.`;

//예제.5
const arr1 = [10, 20, 30];
const arr2 = arr1.map((item) => item / 10);
s5.innerHTML = arr2 + "<br>";

const arr3 = ["홍길동", "김갑중", "박상무"];
//arr3의 배열을 정의
const arr4 = arr3.map((item, idx) => {
  //arr3의 값을 map 함수의 매개변수로 호출 (홍,0),(김,1),(박,2)
  let obj = {};
  //obj 객체를 정의.
  obj["key"] = idx + 1;
  //obj[]의 num 값은 1 2 3
  obj["value"] = item;
  //obj[]의 userName의 값은 홍 김 박
  return obj;
  //실행 종료 시 obj객체에 값을 반환한다. = ㅎ
});

s5.innerHTML = arr4.map((item) => `${item.key} ${item.value}`).join("<br>");
//map을 이용한 배열을 객체로 변경하는법 ? ?
// s5.innerHTML += arr4;
// (user) => (user + "안녕하세요.");
//getName(user){result = user + "안녕하세요."};

//예제.6
const subjects6 = ["쓰기", "듣기", "말하기"];
//값을 정의 하고
// var a = x.map((item)=>{});
const arr6 = subjects6.map(
  (item) => {
    //map 함수를 호출하여 sub6의 배열 값을 가져온다 아래 쿼리의 item에 값을 순차로 대입.

    return prompt(`영어 ${item}의 점수는?`, "0");
  }
  // 프롬프트의 입력 값을 리턴하여 arr6의 값으로 입력 0 1 2
);



let result6 = arr6.some((item) => item < 60);
//res6 변수를 정의 하고 만약 arr6의 몇몇 값이 60보다 작으면
result6 = result6 ? "불합격" : "합격";
// 불합격 이고 60이상이면 합격
s6.innerHTML = result6;
// // // //예제.7
// // // const subjects7 = ["쓰기", "듣기", "말하기"];

// // // const arr7 = subjects7.map((item) => {
// // //   return prompt(`${item}의 점수는?`, "0");
// // // });

// // // let result7 = arr7.every((item) => item >= 60);

// // // result7 = result7 ? "합격" : "불합격";

// // // s7.innerHTML = result7;

// // // //예제.8
// // // const fruit_1 = ["딸기", "바나나", "파인애플"];
// // // const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];
// // // let fruit_3 = [];

// // // fruit_3 = [...fruit_1];
// // // fruit_2.map((item) => {
// // //   if (!fruit_3.includes(item)) {
// // //     fruit_3.push(item);
// // //   }
// // //   //fruit3에 포함되어 있지 않은 item을 push 해서 넣어라
// // // });
// // // s8.innerHTML = fruit_3;

// // // //예제.9
// // // const subjects9 = ["쓰기", "듣기", "말하기"];
// // // //배열 할당
// // // const arr9 = [];
// // // ///공 배열
// // // for (let item of subjects9) {
// // //   arr9.push(prompt(`${item}의 점수는?`, "0"));
// // // }

// // // //1번 배열의 아이템을 let 변수로 변경

// // // let result9 = arr9.every((item) => item >= 60);
// // // result9 = result9 ? "합격" : "불합격";
// // // s8.innerHTML = result9;
