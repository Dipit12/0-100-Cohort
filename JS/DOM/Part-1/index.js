console.log("Hello world");
alert("lol")

console.dir(document.head)

console.dir(document.body.childNodes[0])

/*
document.body.style.backgroundColor = "green"
document.body.childNodes["5"].innerText = "hello dudu"
*/

console.dir(document.getElementById("heading"))

console.dir(document.getElementsByClassName("something"))
let heading = document.querySelector("h2");
console.dir(heading)

let unique_divs = document.querySelectorAll(".box")
console.dir(unique_divs)

document.querySelectorAll(".box")[0].innerText = "text-1"

document.querySelectorAll(".box")[1].innerText = "text-2"

document.querySelectorAll(".box")[2].innerText = "text-3"
