type Emp = {
    firstName: string,
    lastName: string,
    age: number
}

type StringNumber = string | number;

function printId(StringNumber){
    console.log(`ID is ${StringNumber}`)
}

console.log(printId(2))
console.log(printId("2"))