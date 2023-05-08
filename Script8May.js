// //Actual Differance between let var const

// let x = 10
// console.log(x) //10

// x = 200
// console.log(x) //200

// console.log(x)//200

// //=====================================
// const y = 400
// console.log(y)//400

// y = 700
// console.log(y)

//=====================================

//Problem 1

//{} => block

//let and const blocked Scope

// {
//     let z = 20
//     console.log(z)//20
// }

// console.log(z)//error(z is not defined)

//Program 2
// let y1 = 100
// {
//     let y1 = 500
//     console.log(y1)//500
// }
// console.log(y1)//100

//Program3
// let x1 = 900//450
// {
//     console.log(x1)//900
//     x1 = 450//update
//     console.log(x1)//450
// }
// console.log(x1)//450


//Program 4
// let z1 = 500
// {
//     //console.log(z1) //error(hoisting)
//     let z1 = 300
//     console.log(z1)//300
// }
// console.log(z1)//500

//Program 5
// {
//     const p1=250
// }
// console.log(p1)//P1 is not define

// let s1
// console.log(s1)//undefined

//program 6
// const k = 5000
// {
//     console.log(k)//5000
//     k = 500
//     console.log(k)//error
// }
// console.log(k)

//Progarm 7

// {
//     var a = 900
// }
// console.log(a)//900

//Let and const having block scope
//var dont have block scope
//var function scope

//Program 8

// var num = 100
// console.log(num)//100
// function add() {
//     var num = 200
//     //console.log(num)//200
// }
// console.log(num)//100
// add()
// console.log(num)//100


//100
//100
//200
//100


//Program 9
// function init(){
//     var t1=999
//     console.log(t1)//999
// }
// init()
// console.log(t1)//error

//Program 10
var n1 = 800//790
console.log(n1) //800
function display() {
    n1 = 790//update
    console.log(n1)//790
}
console.log(n1)//800
display()
console.log(n1)//790

//800
//800
//790
//790




