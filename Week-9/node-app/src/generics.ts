// generics
// its a language independent concept
// similar to templates in C++

function identity<T>(arg : T){
    return arg;
}

let output1 = identity<string>("Dipit")
let output2 = identity<number>(1);

console.log(output1, output2);
