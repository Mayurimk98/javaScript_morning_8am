let mayuri = {
    fullName: "Mayuri Katwe",
    age: 25,
    salary: 20000,
    skill: ["java", "js"],
    empId: 1234,
    info: function () {
        console.log(`${this.fullName}`)
    }
}

//Object => property and methods
//method=> function

//CRUD
// mayuri.city="nashik"

// console.log(mayuri.salary)

// console.log(mayuri.info) //function body  ==> print the function
// mayuri.info() //call the function

// mayuri.age=30

// delete mayuri.empId

//100 emp 


//Object literal

let vaibhav = {
    fullName: "Vaibhav Katwe",
    age: 12,
    salary: 1000,
    skill: ["py", "cy"],
    empId: 9876,
    info: function () {
        console.log(`${this.fullName}`)
    }
}

let Ram = {
    fullName: "Sam raut",
    age: 34,
    salary: 34000,
    skill: ["html", "css"],
    empId: 6666,
    info: function () {
        console.log(`${this.fullName}`)
    }
}


//Class ==> blue print  => user defined datatype
//datatype 
//string, array, undefined, number , null, NAN, Map ,set, class

//ES6==> class
// class Employee {
//     firstName = "mayuri"
//     age = 34
//     salary = 3000
//     empId = 9000
//     info() {
//         console.log(this.firstName)
//     }
// }

// let Dinga = new Employee()
// console.log(Dinga)

// let shamKumar=new Employee()
// console.log(shamKumar)


class Employee {
    constructor(firstName, age, salary, empId) {
        this.firstName = firstName
        this.age = age
        this.salary = salary
        this.empId = empId
    }
    display() {
        console.log(this.firstName)
    }

}

let Sathish=new Employee("Sathish",56,500000,1234)
console.log(Sathish)

let ram=new Employee("ram", 34, 647383,11111)
console.log(ram)




























//function decalaration

// function add(){
//     console.log("hello")
// }
// //function expression
// let add1=function(){
//     console.log('hi')
// }
// //arraow function
// let add2=()=>{
//     console.log('hi')
// }


