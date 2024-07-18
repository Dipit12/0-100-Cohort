const initialArray = [1,2,3,4]
initialArray.push(5)
console.log(initialArray)

initialArray.pop()
console.log(initialArray)

// to delete an element from the start of an array
initialArray.shift()
console.log(initialArray)

// to add an element to the start of an array
initialArray.unshift(0)
console.log(initialArray)

// concatenating an array
const secondArray = [5,6,7]
const combinedArray = initialArray.concat(secondArray)
console.log(combinedArray)

// sorting an array
let someArray = [4,2,3,1]
console.log(someArray.sort())

// forEach
function logthing(str){
    console.log(str)
}
initialArray.forEach(logthing)
