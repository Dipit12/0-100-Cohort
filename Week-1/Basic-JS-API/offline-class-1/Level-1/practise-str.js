// Practising string inbuilt functions
// To get the length of the string

function getLength(str){
    console.log("Original string is " + str)
    console.log("Length of the string is " + str.length)
}
getLength("Dipit Madan")

// to find the index

function findindexOf(str, target){
    console.log("Original string is " + str)
    console.log("The index is " + str.indexOf(target))
}
findindexOf("Dipit Madan", "Madan")

function LastfindindexOf(str, target){
    console.log("Original string is " + str)
    console.log("The index is " + str.indexOf(target))
}
LastfindindexOf("Dipit Madan Madan", "Madan")
// Slicing in Strings
function slicing(str,start,stop){
    console.log("The original string is " + str)
    console.log("The sliced string is " + str.slice(start,stop))
}
slicing("Dipit madan",0,3)
const value = "Tithi shah"
console.log(value.slice(2,4))

// replacing
let name = "Tithi shah"
console.log(name.replace("shah","Madan"))

// splitting
let name1 = "Dipit Madan"
console.log(name1.split(" ")) // returns an array

// trim
let name2 = "   Dipit Madan   "
console.log(name2.trim())

// converting an array to uppercase
let name3 = "dipit"
console.log(name3.toUpperCase())

// converting an string to lowercase
let name4 = "DIPIT"
console.log(name4.toLowerCase())
