
//function constructor
//Es6 class
//Object.create


//Es6 class
//1. without constructor
//2. with constructor
//3. by using function
//4. set and get keyword


//1 without constructor
// class Person {
//     fullName = "Mayuri Katwe"
//     displayName() {
//         console.log(this.fullName)
//     }
// }
// let mayuri = new Person()
// console.log(mayuri)
// mayuri.displayName()

// let shami=new Person()
// console.log(shami)
// shami.displayName()

// let ashu=new Person()
// console.log(ashu)
// ashu.displayName()

// class Person {
//     fullName = undefined
//     displayName() {
//         console.log(this.fullName)
//     }
// }
// let ram=new Person()
// console.log(ram)
// ram.displayName()
// ram.fullName="ram"
// console.log(ram)
// ram.displayName()


// let ranga=new Person()
// console.log(ranga)
// ranga.fullName="ranga kumar"
// console.log(ranga)
//====================================================

//2. with constructor

// class Person {
//     constructor(fullName, age) {
//         this.fullName = fullName
//         this.age = age
//     }
//     displayName() {
//         console.log(this.fullName)
//     }
// }
// let sathish=new Person("sathish kumar rao",32)
// console.log(sathish)

// let mayurik=new Person("mayuri rao",43)
// console.log(mayurik)

//==============================================

//3. by using function

// class Person{
//     fullName(fn){
//         this.fullName=fn
//     }
//     displayName(){
//         return this.fullName
//     }
// }
// let raj=new Person()
// console.log(raj)
// raj.fullName("Raj kumar")
// console.log(raj)
// console.log(raj.displayName())

//4. set and get keyword

class Person{
   set fullName1(fullNm) {
    this.fullName=fullNm
   }
   get displayName(){
    return this.fullName
   }
}
let ram1=new Person()
console.log(ram1)
ram1.fullName1="ram rajiv"
console.log(ram1)
console.log(ram1.displayName)

let a2
console.log(a2)

let a3=null
console.log(a3)



