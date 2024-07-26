// Arrow functions
// noraml function
const prompt = require('prompt-sync')();
function sum(a,b){
    return a+b;
}

const ans = sum(2,3);
console.log(ans);

// Arrow function
const sum1 = (a,b) =>{
    return a+b;
}
const ans1 = sum1(3,4);
console.log(ans1);

// Map 
// Given an array, give me back a new array in which every value is multiplied by 2
const input = []
var n = prompt("Enter the length of the array")
for(let i=0;i<n;i++){
    var num = prompt("Enter the value")
    input.push(num);
}
// printing the array
console.log("Original array is \n");
for(let i=0;i<n;i++){
    console.log(input[i]);
}
function mutliplier(i){
    return i*2;
}
const new_array = input.map(mutliplier)
console.log(new_array);

// Filtering
// given an array return all the even values from it
const arr = [1,2,3,4,5,6];

function filtering_logic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
const solution = arr.filter(filtering_logic);
console.log(solution);

// startswith
const names = ["Dipit", "TIthi","Aarav"]

const sol = names.filter(function(name){
    if(name.startsWith("D")){
        return true;
    }
    else{
        return false;
    }
    
})
console.log(sol);