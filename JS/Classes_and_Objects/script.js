const student = {
    name:"Dipit",
    age:18,
    reg_no:123,
    cpga:8.5,
    print_marks: function(){ // method
        console.log(this.cpga)
    }
}

console.log(student.age);
console.log(student.print_marks());

const employee = {
    calctax(){
        console.log("tax rate is 10%");
    }
}
const karanArjun = {
    salary:50000
};

karanArjun.__proto__ = employee; // to make sure the funtion calcTax() is accessible to karanArjun