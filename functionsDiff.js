

//actual diff between function expression and arrow function

//function
//1. function declarion
//2. arrow function
//3. function expression


// let greeting = () => {
//     console.log('welcome all')
// }

// let init = function () {
//     console.log('hello')
// }

// function display() {
//     console.log('hi')
// }


// //Javascript ==> Object

// //parent object ==> window

// let a = 10//block
// console.log(a)//10
// console.log(window.a) //undefined

// var a1 = 20 //globle
// console.log(a1) //20
// console.log(window.a1) //20


//Program 1

// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: function () {
//         console.log(this == person) //true
//         console.log(this.firstName, this.lastName) //Mayuri Katwe

//         let greeting = function () {
//             console.log(this==window)
//             console.log(this.firstName+ this.lastName)//NaN
//         }

//         greeting()
//     }

// }

// //console.log(person.info)
// person.info()


//Program 2
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: function () {
//         console.log(this == person) //true
//         console.log(this.firstName, this.lastName) //Mayuri Katwe

//          function greeting () {
//             console.log(this==window)
//             console.log(this.firstName+ this.lastName)//NaN
//         }

//         greeting()
//     }

// }

// person.info()

//===================================================================

//Program 3


// let firstName = "vaibhav"
// let lastName = "shinde"
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: function () {
//         console.log(this == person) //true
//         console.log(this.firstName, this.lastName) //Mayuri Katwe

//         let greeting = function () {
//             console.log(this == window)//true
//             console.log(this.firstName + this.lastName) //NaN
//         }

//         greeting()
//     }

// }

// //console.log(person.info)
// person.info()

//=====================================================================


// var firstName = "vaibhav"
// var lastName = "shinde"
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: function () {
//         console.log(this == person) //true
//         console.log(this.firstName, this.lastName) //Mayuri Katwe

//         let greeting = function () {
//             //console.log(this == window)//true
//             console.log(this.firstName + this.lastName) //vaibhavshinde
//         }

//         greeting()
//     }

// }

// //console.log(person.info)
// person.info()

//==================================================================


// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 25,
//     info: function () {
//         console.log(this == person) //true
//         console.log(this.firstName, this.lastName) //Mayuri Katwe

//         let greeting = () => {
//             console.log(this == person)//true
//             console.log(this.firstName + this.lastName) //MayuriKatwe

//             let display = function () {
//                 console.log(this==window)//true
//                 console.log(this.firstName + this.lastName)//NaN
//             }
//             display()
//         }

//         greeting()
//     }

// }

// //console.log(person.info)
// person.info()




let person = {
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 25,
    info: function () {
        console.log(this == person) //true
        console.log(this.firstName, this.lastName) //Mayuri Katwe

        let greeting = () => {
            console.log(this == person)//true
            console.log(this.firstName + this.lastName) //MayuriKatwe

            let display = () => {
                console.log(this == window)//false
                console.log(this.firstName + this.lastName)//MayuriKatwe
            }
            display()
        }

        greeting()
    }

}

//console.log(person.info)
person.info()


//function ==> funtion
//function declaration /function expression==> this==window

//arrow function //this==current current scope

