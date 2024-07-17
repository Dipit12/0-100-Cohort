// Its a linear data structure to store data in contiguous memory locations
// Arrays are used to store multiple values in a single variable
// Arrays are used to store values of different data types
// Arrays can be created using the following ways

const personArray = ["Dipit","aarav","arnav","tithi"]

let mixedArray = ["Dipit",18,true]

const age = [21,22,23,24,25]
// iterating through an array
for(let i=0;i<personArray.length;i++){
    console.log(personArray[i])
}
// printing all the even numbers in the age array
for(let j=0;j<age.length;j++){
    if(age[j] % 2 == 0){
        console.log(age[j])
    }
}