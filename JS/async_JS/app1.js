function sum(a,b){
    return a+b;
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

console.log(calculator(2,3,sum));