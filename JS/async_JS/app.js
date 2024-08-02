function hello(){
    console.log("hello");
}
// time is given in ms, thus 2000 ms is equivalent to 2 seconds
console.log("one");
console.log("two");
setTimeout(hello, 2000) // delays the passed function by some given time, this line would be run parallely with the rest of the code
console.log("three") // these 2 statements wont be affected by the delay of the setTimeout function, they would be instantly execut4ed and after 2 seconds the setTimeout function would be executed
console.log("four")
 