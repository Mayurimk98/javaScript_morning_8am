


//function declartion
//function expression
//arrow function

// function init(a, b) {
//     return a + b
// }
// let a = init(10, 2)
// console.log(a)


// let init1 = function (a, b) {
//     return a + b
// }
// let a1 = init(10, 2)
// console.log(a1)

// // let init2 = (a, b) => { 
// //     return a + b
// // }


// let init2 = (a, b) => a + b

// let a2 = init(10, 2)
// console.log(a2)

// let arr = [12, 34, 56]
// //[14,36,58]

// let res = arr.map((el) => el + 2)
// console.log(res)

//object

//super ==> window

// window={
// b=30
// }

let a = 20  //block
console.log(a)//20
console.log(window.a)//undefined

var b = 30//globle
console.log(window.b)//30

// let human = {
//     firstName: "Manjiri",
//     lastName: 'kulkarni',
//     age: 34,
//     init: function () {
//         //this==human
//         console.log(this.firstName + this.lastName)//Manjirikulkarni

//         let displayName = function () {
//             //this==window
//             console.log(this.firstName + this.lastName) //NaN
//         }

//         displayName()
//     }
// }
// human.init()

// var firstName="sham"
// var lastName="puri"

// let human = {
//     firstName: "Manjiri",
//     lastName: 'kulkarni',
//     age: 34,
//     init: function () {
//         //this==human
//         console.log(this.firstName + this.lastName)//Manjirikulkarni

//         function displayName  () {
//             //this==window
//             console.log(this.firstName + this.lastName) //NaN
//         }

//         displayName()
//     }
// }
// human.init()


// var firstName = "sham"
// var lastName = "puri"

// let human = {
//     firstName: "Manjiri",
//     lastName: 'kulkarni',
//     age: 34,
//     init: function () {
//         //this==human
//         console.log(this.firstName + this.lastName)//Manjirikulkarni

//         displayName = () => {
//             console.log(this==human)
//             console.log(this.firstName + this.lastName) //Manjirikulkarni
//         }

//         displayName()
//     }
// }
// human.init()

//window

// let human = {
//     firstName: "Manjiri",
//     lastName: 'kulkarni',
//     age: 34,
//     init: () => {
//         console.log(this.firstName + this.lastName)

//         displayName = () => {
//             console.log(this == human)
//             console.log(this.firstName + this.lastName) 
//         }

//         displayName()
//     }
// }
// human.init()