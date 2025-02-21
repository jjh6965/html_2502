


const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);



const a = document.createElement("p");
const b = document.createTextNode("test");
a.appendChild(b);
const c1 = document.getElementById("s2");
c1.appendChild(a);