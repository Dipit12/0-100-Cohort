// an example of async function is setTimeout

function findSum(n){
    let sum = 0;
    for(let i=0; i<n;i++){
        sum += i;
    }
    console.log(sum)
}

function findSumTill100(){
    return findSum(100);
}

setTimeout(findSumTill100,1000)
console.log("Hello")