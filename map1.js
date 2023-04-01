// let a = ""
// let b = ["mayuri", 23, true, undefined]

// let c={
//     modelNumber:1234,
//     display:function(){
//         console.log("hello")
//     }
// }
// console.log(c.display)//function
// c.display()//hello

// console.log(c.modelNumber)//1234

// function add(){
//     console.log(10+10)
// }
// add()

// let student = {
//     undefined: "Mayuri",
//     7668899: 1234,
//     isDoingJob: true,
//     NaN: ["java", "selenium", "cypress"],
//     family: {
//         father: "Mahendra",
//         mother: "jaya"
//     }
//}

//Object
//string ==> key
//value => any datatype

// for(let key in student){
//     console.log(typeof key)
// }

// let a="mayuri"
// console.log(typeof a) //string

//=================================================
//MAP()
// let a={}


// class Student{
//     name1="mayuri"
// }
// let name1=new Student()
//name1==> datatype student
//=========================================

//CRUD
//create ==> add
//retrive
//update
//delete

let myMap = new Map()
console.log(myMap) //Map(0) {}

//1. set(key,property)
myMap.set(1233,"rollNumber")
console.log(myMap)

myMap.set('firstName',"Vaibhav")
myMap.set(true,'doingJob')
myMap.set(undefined,20000)
console.log(myMap)

//2. get(key)
// let y1=myMap.get(undefined)
// console.log(y1)

// console.log(myMap.get('firstName'))

// //3. has()
// let y2=myMap.has('firstName')
// console.log(y2)

// let y3=myMap.has('salary')
// console.log(y3)

// //4. delete(key)  => boolean

// let u1=myMap.delete(1233)
// console.log(u1) //true
// console.log(myMap)

// let u2=myMap.delete('family')
// console.log(u2)
// console.log(myMap)

//5. clear()
// myMap.clear()
// console.log(myMap)

//6. forEach()
// myMap.forEach(function(value,key){
//     console.log(value,typeof key)
// })


//set(),get(),has(),delete(),clear(),forEach()

//property size

console.log(myMap.size)


for(let key of myMap.keys()){
    console.log(key)
}

for(let value of myMap.values()){
    console.log(value)
}

for(let [key,value] of myMap.entries()){
    console.log(key,value)
}




























