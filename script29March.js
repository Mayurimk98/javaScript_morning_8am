
//Object literal

let mayuri = {
    firstName: "Mayuri",
    age: 25,
    skill: "javascript",
    display: function () {
        console.log(this.firstName)
    }
}
// console.log(mayuri.age)

// mayuri.display()


let sham = {
    firstName: "Sham",
    age: 40,
    skill: "python",
    display: function () {
        console.log(this.firstName)
    }
}


let ravi = {
    firstName: "Ravi",
    age: 35,
    skill: "Css",
    display: function () {
        console.log(this.firstName)
    }
}

//100 student ==> 100 object

//Javscript ==> Class==> es6

//string ,array,number => predefined

//class => user define datatype

class Student {
    constructor(firstName, age, skill) {
        this.firstName = firstName
        this.age = age
        this.skill = skill
    }
    display() {
        console.log(this.firstName)
    }
}

let vaibhav=new Student("vaibhav",12,'java')
console.log(vaibhav)
vaibhav.display()

let sathish=new Student("sathish",67,'cypress')
console.log(sathish)



// let fn="mayuri"
// let fn1=new String("mayuri")


// let arr=[1,2,3]
// let arr1=new Array(3)
// arr1[0]=1
// arr1[0]=2
// arr1[0]=3




















//
// let sum=function(){
//     console.log('hello')
// }