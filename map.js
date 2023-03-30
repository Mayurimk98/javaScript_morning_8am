
// let a = ""
// let b = []
// let c = {}

// let info = {
//     firstName: "Mayuri",
//     rollNo: 23,
//     isDoingJob: true,
//     skill: ["java", "cypress", "Javascript"],
//     family: {
//         father: "Mahendra",
//         mother: "Jaya"
//     }
// }

// let info1 = {
//     firstName: "Mayuri",
//     undefined: 23,
//     2000: true,
//     true: ["java", "cypress", "Javascript"],
//     family: {
//         father: "Mahendra",
//         mother: "Jaya"
//     }
// }
// console.log(info.family)
// console.log(info.family.mother)

// for(let key in info){
//     console.log(typeof key)
// }


//=========================================================

let a={}
a.fn="mayuri"

//================================================================

//string, array, number, boolean, undefined, class,null,NaN,map
//Map() => datatype

let info1 = new Map()
console.log(info1)

//1. set()==> add property
info1.set("firstName","mayuri")
console.log(info1)

info1.set(1,"RollNo")
info1.set(true,2000)
info1.set(undefined,"name")
console.log(info1)

//2. retrive ==> get()
let y1=info1.get(true)
console.log(y1) //2000

console.log(info1.get(undefined)) //name

//3. has()
let u1=info1.has("firstName")
console.log(u1)

console.log(info1.has("lastName"))

//4. delete()
let y3=info1.delete("firstName")
console.log(y3)

let y4=info1.delete('rollno')
console.log(y4)

console.log(info1)

//5. forEach()
info1.forEach(function(a1,a2){
    console.log(a1,a2)

})



//Map ==> set(), get(), has(), delete(),forEach()

let mapA=new Map()
mapA.set(1,"Audi")
mapA.set(true,"canDrive")
mapA.set("name","Mayuri")
console.log(mapA)

let mapB=new Map([
    [1,"teaser"],
    ["firstName","mayuri"],
    [true,"candrive"],
    [2000,"salary"]
])
console.log(mapB)
console.log(mapA.size)

//size  ==> property

console.log(mapB.size)

//set(), get(), has(),delete(),forEach()
//size

















