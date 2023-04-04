// // let marks=[22,66,99,55,43]

// // let y1=marks[1]
// // console.log(y1)

// //to unpack the packed element

// //array
// let marks=[22,66,99,55,43]
// let [a,b,c,d,e]=marks
// console.log(c)

// //object
// let car={
//     model:"Suv",
//     numberPlate:1234,
//     color:"white"
// }
// let {numberPlate}=car
// console.log(numberPlate)

// let {model:m,numberPlate:np,color:clr}=car

// console.log(m)
// console.log(np)
// console.log(clr)

// //nested array
// let rollNo=[[1,2,3],[6,7,8],[10,20,30]] 
// let [[p1,p2,p3],[s1,s2,s3],[w1,w2,w3]]=rollNo
// console.log(w2)

// //nested object
// let student={
//     fullName:"Ram Krishna",
//     marks:{
//         math:20,
//         science:100
//     }
// }

// let {marks:{math,science}}=student
// console.log(science)

// //object inside array

// let student1=[
//     {
//         firstName:"Mayuri",
//         rollNo:23,
//         skill:"js"
//     },
//     {
//         firstName:"Vaibhav",
//         rollNo:19,
//         skill:"Python"
//     }
// ]

// let [{skill:y1},{skill:y2}]=student1
// console.log(y1,y2)


// //array inside object
// let human={
//     firstName:"Sham",
//     lastName:"Kumar",
//     marks:[12,45,78,100]
// }

// let {marks:[a1,b1,c1,d1]}=human
// console.log(c1)



let Person={
    firstName:"Mayuri",
    family:{
        father:"Mahendra",
        mother :"Jaya",
        sister:[
           {
            name1:"kaveri",
            age:12
           },
           {
            name1:"reshma",
            age:20
           },
           {
            name1:"shubhangi",
            age:32,
            skills:["html","css","javascript"],
            employeeDetails:{
                empId:2222,
                salary:45000
            }
           }
        ]
    }
}

let {family:{sister:[{},{},{skills:[r1,r2,r3],employeeDetails:{salary}}]}}=Person
console.log(r3)
console.log(salary)




