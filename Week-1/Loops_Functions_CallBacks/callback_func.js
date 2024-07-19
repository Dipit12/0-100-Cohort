// calling function inside another function
// refers to passing an function as an argument

function getSquare(num, fnToCall){
    fnToCall(num ** 2)
}

function display(data){
    console.log(data)
}

getSquare(5,display)

function sumOfSomething(a,b,callback){
    const val1 = callback(a)
    const val2  = callback(b)
    return val1 + val2;
}

console.log(sumOfSomething(3,4,square))
console.log(sumOfSomething(3,4,cube))