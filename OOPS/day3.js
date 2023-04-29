
//function constructor
//es6 class
//object.create()


//es6 
//without constructor
//with constructor
//function
//set get keyword

//OOPs
//code proper secure

//inheritence
//polymorphism
//Abstraction
//encapsulation


// class Student {
//     firstName = "mayuri"
//     lastName = "katwe"
//     country = "india"
// }

// class Teacher extends Student {
//     salary = 40000
// }

// let mayurik=new Student()
// console.log(mayurik)

// let mayuriTeacher=new Teacher()
// console.log(mayuriTeacher)


//=============================================


class Student{
    constructor(firstName,lastName,country){
        this.firstName=firstName
        this.lastName=lastName
        this.country=country
    }
    displayFullName(){
        console.log(this.firstName,this.lastName)
    }
}

class Teacher extends Student{
    constructor(firstName,lastName,country,salary,skill){
        super(firstName,lastName,country)
        this.salary=salary
        this.skill=skill
    }
    displaySkill(){
        console.log(this.skill)
    }
}

let mayuri=new Teacher("mayuri","katwe","india",20000,"javascript")
console.log(mayuri)

mayuri.displayFullName() //mayuri katwe
mayuri.displaySkill() //javascript
conole.log(mayuri.firstName)

let mayu=new Student("Mayu","katwe","india")
mayu.displaySkill()//error
console.log(mayuri.salary)
console.log(mayu.country)
