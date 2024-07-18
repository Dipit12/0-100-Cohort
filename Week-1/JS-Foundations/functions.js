// write a function that returns the sum of 2 numbers

function findSum(a,b){
    return a+b;
}

console.log(findSum(3,2));

// callbacks
function findSquare(a,fnToCall){
    let result  = a**2;
    fnToCall(result);
}

function displayResult(data){
    console.log("The result is: " + data)
}

findSquare(5,displayResult)