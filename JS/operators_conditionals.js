/*Qs1. Get user to input a number using prompt(“Enter a number:

”). Check if the number is

a multiple of 5 or not.
*/
const prompt = require('prompt-sync')();
let num = prompt("Enter a number");
if(num%5==0){
    console.log("Is a multiple of 5");
}
else{
    console.log("Is not a multiple of 5")
}

/*
Write a code which can give grades to students according to their scores:
*/
const marks = prompt("Enter your marks");
if(marks>=80 && marks <100){
    console.log("A");
}
else if(marks >=70 && marks < 80){
    console.log("B");
}
else if(marks >= 60 && marks < 70){
    console.log("C");
}
else{
    console.log("F");
}

// use of ternary operator
const age = prompt("Enter your age");
const ans = age>18?"eligible to vote":"not eligible to vote";
console.log(ans);