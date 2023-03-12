
// let fn = "Mayuri"
// console.log(typeof fn) //String

// let a = '10'
// console.log(typeof a)//String

// let a1 = 100
// console.log(typeof a1) //number

// let a2 = false
// console.log(typeof a2) //boolean

// let a4 = 'true'
// console.log(typeof a4)//string

// let a5 = [1, 2, 3, 4]
// console.log(typeof a5) //Array???===> object

// let firstName = "vaibhav"
// let a7 = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     displayName: function () {
//         console.log(this.firstName)
//     }

// }

// console.log(a6.lastName)//Katwe
// a6.displayName()//Mayuri


//===================================================

//function
//3 type of function

//1. function declaration
//2.function expression
//3. arrow function

function add(x, y) {
    return x + y
}
let a22 = add(2, 3)
console.log(a22)

let add1 = function (x, y) {
    return x + y
}
let a23 = add1(2, 3)
console.log(a23)

// let add2 = (x, y) => {
//     return x + y
// }
// let a24 = add2(2, 3)
// console.log(a24) //5

let add2 = (x, y) => x + y
let a24 = add2(2, 3)
console.log(a24) //5

//1.string as parameter and string as return type

function stringPara(greet) {
    return greet
}

let result = stringPara('Welcome to minskole!!!')
console.log(result)

//2. array as parameter and array as return type

let ar = [1, 2, 3, 4, 5]
function arrayPara(arr) {
    //let arr=ar
    arr[0] = 500
    return arr

}
console.log(ar) //[1,2,3,4,5] 
let s1 = arrayPara(ar)
console.log(s1) //[500,2,3,4,5]
console.log(ar) //[500,2,3,4,5]








