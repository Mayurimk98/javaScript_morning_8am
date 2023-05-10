
//lexical Scope => delcare function inside function parent function variable are accessible in child function but child function variable are not accessible in parent function variable


// function display() {
//     let a = 30
//     let b = 2
//     console.log(a + b)
//     //console.log(c + d)//child variable

//     function display1() {
//         let c = 70
//         let d = 6
//         console.log(a + b + c + d)//parent function variable ==> 108

//         function display2() {
//             let p = 20
//             let q = 5
//             console.log(p + q)
//             console.log(a + b)
//             console.log(c + d)
//         }
//         display2()
//     }
//     display1()

// }
// display()


// let x = 20
// let y = 10

// function init() {
//     let x = 40
//     let y = 5
//     console.log(x + y) //45

//     function init1(){
//         console.log(x+y)//45


//         function init2(){
//             console.log(p+q)//p is not defined
//         }

//         init2()
//     }
//     init1()
// }

// init()

//==============================================================

//closure

//=> after return keyword program close
//=> return function

// let add= ()=>{
//     console.log('hello')
// }


// function add(x, y) {
//     console.log(x + y)
//     return "hello"
//     console.log(x + y)
// }
// let y1 = add(10, 2) //12
// console.log(y1)

function addition(x,y){
    console.log('hello')
    return function(){
        console.log(x+y)
    }
}
let y2=addition()
console.log(y2)
// let y2=function(){
//     console.log(x+y)
// }
y2()



function init1(){
    return function(){
        console.log('run the code')
    }
}
init1()()







// console.log('================')
// console.log(undefined+undefined)
// console.log(undefined+20)






