const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");

///////////예제.1////////////
function sumFnc_1(num1, num2) {
  return num1 + num2;
}

s1.innerHTML = sumFnc_1(1, 2);

s1.innerHTML += "<br>";

const sumFnc_2 = (num1, num2) => num1 + num2;
s1.innerHTML += sumFnc_2(1, 2);

s1.innerHTML += "<br>";

const sumFnc_3 = (num1, num2) => {
  const result = `num1 + num2 = ${num1 + num2}`;
  return result;
};
s1.innerHTML += sumFnc_3(100, 200);

s1.innerHTML += "<br>";

const infoFnc_1 = function (info1, info2) {
  return { name: info1, age: info2 };
};
s1.innerHTML += infoFnc_1("홍길동", 22);
// console.log(infoFnc_1("홍길동", 22));

s1.innerHTML += "<br>";

const infoFnc_2 = (info1, info2) => ({ name: info1, age: info2 });
s1.innerHTML += infoFnc_2("최군", 32);
// console.log(infoFnc_2("최군", 32));

/////////////////////////예제.2 ///////////////////////////////////
const obj_1 = {
  name: "홍길동",
  infoFnc: function () {
    s2.innerHTML = this;
    const innerFnc = () => {
      s2.innerHTML += "메서드 내의 화살표 함수 : " + this;
    };
    innerFnc();
  },
};
obj_1.infoFnc();

s2.innerHTML += "<br>";

const obj_2 = {
  name: "홍대리",
  infoFnc: () => {
    s2.innerHTML += this;
    const innerFnc2 = () => {
      s2.innerHTML += "화살표 함수 메서드에 함수 : " + this;
    };
    innerFnc2();
  },
};
obj_2.infoFnc();

s2.innerHTML += "<br>";

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", function () {
  s2.innerHTML += this + "<br>";
});

btn2.addEventListener("click", () => {
  s2.innerHTML += this + "<br>";
});
