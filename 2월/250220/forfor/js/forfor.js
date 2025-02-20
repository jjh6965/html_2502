var p1 = document.getElementById("demo1");
var p2 = document.getElementById("demo2");
var p3 = document.getElementById("demo3");

//예제.1
for (i = 2; i < 10; i++) {
  for (j = 1; j < 10; j++) {
    var result = i * j;
    p1.innerHTML += i + "x" + j + "=" + result + "<br>";
    //  document.write(`${i}x${j}=` + result + "<br>");
  }
  p1.innerHTML += "<br>";
  //document.write("<br>");
}

//예제.2
var a2 = 4;
for (i2 = 1; i2 < 10; i2++) {
  if (i2 < 4) {
    var result2 = a2 * i2;
    // document.write(`${p2}x${i2}=` + result2 + "<br>");
    p2.innerHTML += a2 + "x" + i2 + "=" + result2 + "<br>";
  } else {
    //document.write("<br>");
    p2.innerHTML += "<br>";
    break;
  }
}

//예제.3
var a3 = 5;
for (i3 = 1; i3 < 10; i3++) {
  if (i3 == 3 || i3 == 4) {
    continue;
  } else {
    var result3 = a3 * i3;

    p3.innerHTML += a3 + "x" + i3 + "=" + result3 + "<br>";
    //document.write(`${p3}x${i3}=` + result3 + "<br>");
  }
}
