// // let emp={
// //     firstName:"Mayuri",
// //     lastName:"Katwe",
// //     employeeID:1234
// // }
// // console.log(emp.lastName)
// // console.log(emp["lastName"])

// //objectname.key=value

// //city
// // emp.city="Nashik"
// // emp['city']="Pune"
// // console.log(emp)

// // emp.firstName="sanket"
// // console.log(emp)
// // emp['firstName']="Rahul"
// // console.log(emp)

// //delete emp.employeeID
// // delete emp['employeeID']
// // console.log(emp)

// // for(let key in emp){
// //     console.log(key)
// // }

// // for(let key in emp){
// //     console.log(emp[key])
// // }

// // for(let k in emp){
// //     console.log(k,emp[k])
// // }

// //========================================================

// let emp={
//     firstName:"Mayuri",
//     lastName:"Katwe",
//     employeeID:1234
// }

// // console.log(Object.keys(emp))
// // Object.values()
// // Object.entries()

// for(let k of Object.keys(emp)){
//     console.log(k)
// }

// for(let v of Object.values(emp)){
//     console.log(v)
// }

// for(let [k,v] of Object.entries(emp)){
//     console.log(k,v)
// }

//=========================================================================

// let Student=[
//     {fn:"Mayuri"},
//     {fn:"vaibhav"}
// ]

// console.log(Student[1].fn)


let student = [
    {
        firstName: "Mayuri",
        lastName: "Katwe",
        age: 25,
        city: "Nashik",
        skill: ["Js", "Py", "Cy", "Css"],
        marks: 45

    },
    {
        firstName: "Vaibhav",
        lastName: "Raut",
        age: 12,
        city: "Jalgoan",
        skill: ["SQL", "selenium"],
        marks: 89
    },
    {
        firstName: "Sweta",
        lastName: "Kulkarni",
        age: 32,
        city: "Sangamner",
        skill: ["java", "cypress", "Manual"],
        marks: 67
    },
    {
        firstName: "Sam",
        lastName: "rao",
        age: 40,
        city: "Pune",
        skill: ["C#", "HTML", "Css"],
        marks: 12
    },
    {
        firstName: "Chinmay",
        lastName: "Deshpande",
        age: 56,
        city: "Nagpur",
        skill: ["JavaScript", "CSS", "python", "Cypress", "react"],
        marks: 50
    }
]

//Mayuri:4
// student.forEach(function(el){
//     console.log(el.firstName + el.skill.length)
// })

// student.forEach((el)=>{
//     if(el.firstName=="Sam"){
//         console.log(el.firstName , el.skill.length)
//     }
// })

//======================================================
//Jameter skill add

// student.forEach((el)=>{
//     el.skill.push("jmeter")
// })

// console.log(student)

//===============================================

//Marks < 50 ==> 10 add  => marks>50  => sum


//step 1
// student.forEach((el)=>{
//     if(el.marks<50){
//         el.marks=el.marks+10
//     }
// })
//.log(student)
student.forEach((el) => {
    if (el.marks < 50) {
        el.marks = el.marks + 10
    }
})
console.log(student)

//Step2
let greter50 = []
student.forEach((el) => {
    if (el.marks > 50) {
        greter50.push(el.marks)
    }
})
console.log(greter50)

//Step 3
let sum=greter50.reduce((acc,el)=>{
    return acc+el
},0)
console.log(sum)

//avg => sum/length

console.log(sum/greter50.length)