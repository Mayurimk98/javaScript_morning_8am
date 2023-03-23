

let student = [
    {
        firstName: "Mayuri",
        lastName: "Katwe",
        age: 25,
        city: "Nashik",
        skill: ["Js", "Py", "Cy"]
    },
    {
        firstName: "Vaibhav",
        lastName: "Raut",
        age: 12,
        city: "Jalgoan",
        skill: ["SQL", "selenium", "MangoDb"]
    },
    {
        firstName: "Sweta",
        lastName: "Kulkarni",
        age: 32,
        city: "Sangamner",
        skill: ["java", "cypress", "Manual"]
    },
    {
        firstName: "Sam",
        lastName: "rao",
        age: 40,
        city: "Pune",
        skill: ["C#", "HTML", "Css"]
    },
    {
        firstName: "Chinmay",
        lastName: "Deshpande",
        age: 56,
        city: "Nagpur",
        skill: ["JavaScript", "CSS", "python"]
    }
]

//How many elements present in student

//let student=[{},{},{}]
// console.log(student.length)

// console.log(student[1])

//Program1
//retrive the fullname of all student
//firstName+lastName

// for (let i = 0; i < student.length; i++) {
//     //console.log(student[i])
//     console.log(`${student[i].firstName} ${student[i].lastName}`)
// }

//OR
// student.forEach((el)=>{
//     //console.log(el.firstName+ el.lastName)
//     console.log(`${el.firstName} ${el.lastName}`)
// })

//Program 2
//find the fullName of student whoes age is greter than 25

// for (let i = 0; i < student.length; i++) {
//     if (student[i].age > 25) {
//         console.log(`${student[i].firstName} ${student[i].lastName}`)
//     }
// }

// //OR
// let greter25=student.filter((el)=>{
//     return el.age>25
// })
// //console.log(greter25)

// greter25.forEach((el)=>{
//     console.log(el.firstName+el.lastName)
// })

// let greter25 = student.filter((el) => {
//     return el.age > 25
// }).forEach((el) => {
//     console.log(el.firstName + el.lastName)
// })

//Program3
//find the sum of all student age
// let sumOfAge = student.reduce((acc, el) => {
//     return acc + el.age
// }, 0)
// console.log(sumOfAge)

// let sum = 0
// for (let i = 0; i < student.length; i++) {
//     sum = sum + student[i].age
// }
// console.log(sum)