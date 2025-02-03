// given an array of numbers give the max value;

function maxValue(arr:number[]){
    let maxValue:number = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > maxValue){
            maxValue = arr[i];
        }
    }

    return maxValue;
}

console.log(maxValue([2,3,4]))