

//lexical scope

//function inside function , parent function variable are accessible in child function

// function add(){
//     let a=20
//     let b=10
//     console.log(a+b)//30
//     //console.log(c+d) //error

//     function add1(){
//         let c=40
//         let d=100
//         console.log(c+d) //140
//         console.log(a+b) //30

//         function add2(){
//             let e=300
//             let f=500
//             console.log(e+f+a+b)//830
//         }
//         add2()
//     }
//     add1()
// }
// add()


//==========================================================

//globle
// let e = 10
// let f = 20

// function init() {
//     let a = 5
//     let b = 2
//     console.log(a + b) //7
//     console.log(e + f)//30
//     console.log(p + q) //error

//     function init1() {
//         // let e = 900
//         // let f = 300
//         let p = 200
//         let q = 300
//         console.log(a + b + p + q)//507
//         console.log(a + b + e + f)//1207

//         function init2() {
//             // let e = 5000
//             // let f = 100
//             console.log(e + f)//5100   => 1200 => 30
//         }

//         init2()
//     }

//     init1()
// }

// init()


//================================================

//closure

// function add() {
//     let a = 2
//     let b = 5
//     return a + b
//     console.log('hello')
//     console.log(a + b)   
// }

// let sum = add()
// console.log(sum)


function add1(){
    let b=2
    let c=5
    console.log(b+c)//7
    return function(){
        console.log(c+b)//7
        console.log('heello')
    }
}
let sum=add1()
console.log(sum)
sum()
