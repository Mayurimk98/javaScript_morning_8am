//conditional statements
//1 input ==> multiple output

//if

// if (false) {
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }

//if if

// let marks = 20
// if (marks > 80) { //90>80
//     console.log('best studet')
// }
// if (marks > 60) { //90>60
//     console.log('better student') 
// }
// if (marks > 40) { //90>40
//     console.log('good student')
// }
// else {
//     console.log('invalid input')
// }

//if block checks all the the condition

// let marks = 30
// if (marks > 80) { 
//     console.log('best studet')
// }
// else if (marks > 60) { 
//     console.log('better student') 
// }
// else if (marks > 40) { 
//     console.log('good student')
// }
// else {
//     console.log('invalid input')
// }

//truthly value  ==>  1, 'a',"mayuri",{},[],true," "(space)

//falsy value ==> 0, null, undefined, NaN, false

// if(NaN){
//     console.log('hey')
// }
// else{
//     console.log('good bye')
// }


//ternary operator


// let a = 10
// let b = 50

// if (a > b) { //100> 50
//     console.log('a is greater number')
// }
// else {
//     console.log('b is greater number')
// }

//single condition
//syntax
//condition ? true  : false

// a > b ? console.log('a is greater number') : console.log('b is greater number')

// let age =10
// let result = age > 18 ? "can drive" : "cannot drive"
// console.log(result)


//===============================================================================

//switch case
// if else if 


//1- 7   ==> 1 monday 2 tuesday

//switch case without break
// let day = 4

// switch (day) {
//     case 1:
//         console.log("Monday")
//     case 2:
//         console.log("Tuesday")
//     case 3:
//         console.log('Wednesday')
//     case 4:
//         console.log('Thrusday')
//     case 5:
//         console.log('Friday')
//     case 6:
//         console.log('Saturday')
//     case 7:
//         console.log('Sunday')

// }


// let day = 10

// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log('Wednesday')
//         break
//     case 4:
//         console.log('Thrusday')
//         break
//     case 5:
//         console.log('Friday')
//         break
//     case 6:
//         console.log('Saturday')
//         break
//     case 7:
//         console.log('Sunday')
//         break
//     default:
//         console.log('invalid day')
// }


//single condition


let a = 100
let b = 50

// if (a > b) {
//     console.log('a is greater')
// }
// else {
//     console.log('b is greater')
// }

//100 > 50 ? true :false
let a1 = a > b ? 'a is greater' : 'b is greater'
console.log(a1)

