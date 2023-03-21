
//Object
// let student = {
//     fullName: "Shami Jha",
//     age: 40,
//     skill: ["Java", "selenium", "python"],
//     isDoingJob: true
// }

//add
// student.city="Pune"
// student['city']="mumbai"

// //update
// student.age=20
// student['age']=20

// //retrive
// console.log(student.skill)
// console.log(student["skill"])

// //delete
// delete student.isDoingJob

// delete student['isDoingJob']

//===================================================================

// let student = {
//     fullName: "Shami Jha",
//     age: 40,
//     skill: ["Java", "selenium", "python"],
//     isDoingJob: true
// }

//for keys
// for(let key in student){
//     console.log(key)
// }

//--------------------------------------------

//One way===>
//for value
//student.fullName
//objectName.key==value
//objectname[key] ==> value


//for loop for Object
//variableName==> key
// for(let variableName in objectName){

// }

//loop does not support dot notation

// for(let key in student){
//     console.log(student[key])
// }

//----------------------------------------------

//for keys and value
// for (let k in student) {
//     console.log(k, student[k])
// }

//=================================================

//Second way

// let student = {
//     fullName: "Shami Jha",
//     age: 40,
//     skill: ["Java", "selenium", "python"],
//     isDoingJob: true
// }

//key print

// for(let key of Object.keys(student)){
//     console.log(key)
// }

// //values print

// for(let value of Object.values(student)){
//     console.log(value)
// }

// //kays and value
// for(let [key,value] of Object.entries(student)){
//     console.log(key,value)
// }

//=========================================================


let employee = {
    firstName: "Mayuri",
    lastName: "Katwe",
    skills: ["js", "py", "cy", "selenium"],
    salary: 2000,
    family: {
        father: "Mahendra",
        mother: "Jaya",
        sibling: ["vaibhav", "maya"],
        newFamily:{
            fn:"kumari",
            ln:'shaha'
        }
    }
}

console.log(employee.family.newFamily.fn)

//add new element in skill and print new length


// employee.skills.push('HTML')
// console.log(employee)
// console.log(employee.skills.length)

//========================================

// employee.family.sibling.unshift('sathish')
// console.log(employee.family.sibling)

//=========================================
for(let key in employee){
    console.log(key,employee[key])
}


//=================================================

//print jaya

//console.log(employee.family.mother)
//console.log(employee['family']['mother'])

//=================================================

//print maya
//console.log(employee.family.sibling[1])
//console.log(employee['family']['sibling'][1])






















// let marks = [12, 33, 77, 89, 100, 23, 45]
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i])
// }

