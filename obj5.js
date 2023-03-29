// let arr=[12,34,45,67]

//CRUD

//create add
// arr.push(212)
// console.log(arr)

// arr.unshift("mayuri")
// console.log(arr)

// //retrive
// console.log(arr[1])
// console.log(arr.length-1)
// console.log(arr[arr.length-1]) //67

//update
// arr[2]=456
// console.log(arr)

// //delete
// arr.pop()
// arr.shift()
// console.log(arr)

//let arr=[12,34,45,67]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach(function(el,index,arr){
//     console.log(el)
// })

//==============================================

//array 
//let a=["mayuri","katwe",23,89]

//object
// let info={
//     firstName:"mayuri",
//     lastName:"Katwe",
//     rollNumber:23,
//     city:"nashik",
// }  

// //CRUD
// //create /add
// info.skill="java"

// info['skill']="python"

// console.log(info)

// //retrive
// console.log(info.firstName)
// console.log(info["lastName"])

// //update
// //info.rollNumber=567
// info['rollNumber']=93

// //delete
// delete info.city
// delete info['city']


let info = {
    firstName: "mayuri",
    lastName: "Katwe",
    rollNumber: 23,
    city: "nashik",
}
// for(let key in info){
//     console.log(key)
// }

// for(let key in info){
//     console.log(info[key])
// }

// for(let key in info){
//     console.log(key, info[key])
// }


//2 nd way
// for(let key of Object.keys(info)){
//     console.log(key)
// }

// for(let val of Object.values(info)){
//     console.log(val)
// }

// for(let [key,val] of Object.entries(info)){
//     console.log(key, val)
// }

//======================================================================


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

console.log(student[0])

//marks<50 => 10 marks  ==> marks>50 ==> sum

//step 1
student.forEach((el) => {
    if (el.marks <= 50) {
        el.marks = el.marks + 10
    }
})
console.log(student)


//step2
let greter50Obj = student.filter((el) => {
    return el.marks > 50
})
console.log(greter50Obj)

let sum=greter50Obj.reduce((acc, el) => {
    return acc + el.marks
}, 0)
console.log(sum)

//avg
//sum/total length

console.log(sum/greter50Obj.length)

















// {} //block

// if(true){}




