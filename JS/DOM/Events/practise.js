let modeBtn = document.querySelector("#btn1");
let currMode ="light";
modeBtn.addEventListener("click", () => {
   if(currMode == "light"){
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
   }
   else{
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
   }
})