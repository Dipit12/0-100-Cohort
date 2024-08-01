let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let turnO = true;

const  win_patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn0){ //player X
            box.innerText = "O"; 
            turnO = false;
        }
        else{ // player Y
            box.innerText = "X";
            turnO = true;
        }
        box.displayed = true;

        checkWinner();
    })
})

const checkWinner = () =>{
    for(let pattern of win_patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;   

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2=== pos3){
                alert("winner");
            }
        }
    }
}
