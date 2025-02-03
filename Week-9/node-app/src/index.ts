let x: number = 1;
x = 101
console.log(x);

const greet = (firstName: string) =>{
    console.log(greet)
}

const sum = (num1: number, num2:number) =>{
    return num1+num2;
}

// function isLegal(age:number){
//     if(age> 18){
//         return true;
//     }
//     return false;
// }

async function runAfter15(fn: () => void) {
    await setTimeout(sum,1000)
}

greet("Dipit");
console.log(sum(2,3));
console.log(isLegal(30))