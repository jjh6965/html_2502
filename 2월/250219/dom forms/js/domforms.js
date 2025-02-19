function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
    // return 을 하지 않고 다시 돌아옴
  }
}

//let x 변수에 문서의 formd의 속성

function myFunction() {
  // Get the value of the input field with id="numb"
  let x1 = document.getElementById("numb").value;
  //문서의 id값이 numb인 input의 값을 x1에 할당.
  let text;
  //undefinded
  if (isNaN(x1) || x1 < 1 || x1 > 10) {
    // is Not a Number : 숫자가 아닌 것을 뜻함 , 예외처리
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
