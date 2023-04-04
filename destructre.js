//Array
//String
//Object
//Map
//Set
//Number
//Undefined
//null
//NAN
//class


// let fruits = ["apple", "mango", "banana", "grapes"]
// // console.log(fruits[1])

// let a = fruits[0]
// let b = fruits[1]
// let c = fruits[2]
// let d = fruits[3]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


//Destructring

//1. array
// let fruits = ["apple", "mango", "banana", "grapes"]

// let [p1,p2,p3,p4] = fruits
// console.log(p1)
// console.log(p2)
// console.log(p3)
// console.log(p4)


// let rollNo=[23,45,78,90,11]
// let [y1,y2,y3,y4,y5]=rollNo

//2. nested array
//               0   1   2     0   1   2    0    1   2
// let numbers = [[11, 22, 33], [56, 89, 34], [99, 40, 37]]
// //              0                  1            2   
// // console.log(numbers[1][1])
// // numbers[2][2]
// // numbers[0][0]
// // number[0][1]

// let [[w1,w2,w3],[p1,p2,p3],[s1,s2,s3]]=numbers
// console.log(p3)
// console.log(p1)
// console.log(w1)


//3. Object

// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     rollNumber: 67
// }
// // let {firstName,lastName,rollNumber}=person
// // console.log(firstName)
// // console.log(lastName)
// // console.log(rollNumber)


// // let {lastName}=person
// // console.log(lastName)

//alising the keys
// let {firstName:fn,lastName:ln,rollNumber:rn}=person
// console.log(fn)

//4. nested object

// let human = {
//     fullName: "Mayuri Katwe",
//     skill: "Java",
//     family: {
//         father: "Mahendra",
//         brother: "Vaibhav"
//     }
// }

// // let {fullName,skills,family:{father,brother}}=human
// // console.log(fullName)
// // console.log(brother)


// let {family:{father:fh}}=human
// console.log(fh)

//5. object inside array

let student=[
    {
        firstName:"Vaibhav",
        rollNumber:23
    },
    {
        firstName:"Sham",
        rollNumber:34
    },
    {
        firstName:"Ram",
        rollNumber:40
    },
    {
        firstName:"Dinga",
        rollNumber:90
    },
   
]

let [{},{},{firstName:f3,rollNumber:r3},{}]=student
console.log(f3)




































// console.log("Mayuri")
// let a="Mayuri"
// console.log(a)

// console.log(a+a)
