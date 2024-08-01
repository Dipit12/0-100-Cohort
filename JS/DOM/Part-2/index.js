let p_class = document.querySelector(".pclass");
console.dir(p_class);
console.log(p_class.getAttribute(["class"]))

p_class.setAttribute("class","newClass")

let div = document.querySelector(".box")
console.log(div)
div.style.backgroundColor = "red" // equivalent to inline CSS
div.style.fontSize = "26px";

let newBtn = document.createElement("button");
console.log(newBtn)

// appedning the button inside the button
div.appendChild(newtBtn)

//prepending the h1 tag in body
let newHeading = document.createElement("h1")
newHeading.innerText = "This is a new heading"

document.querySelector("body").prepend(newHeading)

// Practise Ques -1 
document.createElement("button")
​

let h1 = document.createElement("h1")
document.querySelector("body").prepend(h1)
h1.innerText = "hello"
document.querySelector(".box").prepend(h1)
let btn = document.createElement("button")
btn.innerText = "Click Me!"
btn.style.backgroundColor = "red";
btn.style.font = "15px"
document.querySelector("body").prepend(btn)