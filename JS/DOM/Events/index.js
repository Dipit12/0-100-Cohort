let btn1 = document.querySelector("#btn-1")
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

// event listeners
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    console.log("this button was clicked - handler 1");
})

btn2.addEventListener("click", () => {
    console.log("this button was clicked - handler 2");
})

btn2.addEventListener("click", () => {
    console.log("this button was clicked - handler 3");
})

btn2.addEventListener("click", () => {
    console.log("this button was clicked - handler 4");
})

btn2.removeElement("click", ()=>{  // would be removed
    console.log("this button was clicked - handler 5");
})