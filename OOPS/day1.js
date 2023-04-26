

// let human=["mayuri","katwe",24,34]

// let human1={
//     firstName:"Mayuri",
//     lastName:"Katwe"
// }

//Object literal
// let mayuri = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     skill: "javascript",
//     display: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(mayuri)
// console.log(mayuri.display)
// mayuri.display()//MayuriKatwe


// let vaibhav = {
//     firstName: "Vaibhav",
//     lastName: "Katwe",
//     age: 20,
//     skill: "Python",
//     display: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }

//100 student  ==> 100 object

//structure
//1. function constructor
//2. Es6 class
//3. Object.create


//1. Function constructor

// function Human(firstName,lastName,age,skill){
//     this.firstName=firstName
//     this.lastName=lastName
//     this.age=age
//     this.skill=skill
//     this.display=function(){
//         console.log(this.firstName,this.lastName)
//     }
// }
// let mayuri=new Human("Mayuri","Katwe",23, "java")
// console.log(mayuri)

// let suraj=new Human("Suraj","rathod",56,"html")
// console.log(suraj)

// suraj.display()

// let vaibhav=new Human("vaibhav","sharma",43,"selenium")
// console.log(vaibhav)

//===================================

let vaibhav={}

function Human(firstName, lastName, age, skill) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.skill = skill
}
Human.prototype.display = function () {
    console.log(this.firstName, this.lastName)
}

let mayuri = new Human("Mayuri", "Katwe", 23, "java")
console.log(mayuri)
mayuri.display()

//parent.prototype==Object._proto_
console.log(Human.prototype == mayuri.__proto__)

Human.prototype.salary="50000"
console.log(mayuri)
console.log(mayuri.salary)

let shreeRam=new Human("Ram","srivasthav",45,"css")
console.log(shreeRam)

//instanceOF => keyword => boolean
console.log(shreeRam instanceof Human)//true
console.log(vaibhav instanceof Human)//false

//hasOwnProperty() => method => boolean
console.log(mayuri.hasOwnProperty("firstName"))//true

console.log(mayuri.hasOwnProperty("salary"))//false



