//OOPS
//Inheritace
//encapsulation
//abstraction
//polymorphism


//Inheritance
//superclass/parentclass
//subclass/child class
//extends

// class GrandFather{
//     surname="Mule"
//     money=2000
//     displayMoney(){
//         console.log(`I have ${this.money}`)
//     }
// }

// class Father extends GrandFather{
//     //2 property
//     //1 method
//     home="shreeNiwas"
//     displayHome(){
//         console.log(`I have my own house name as ${this.home}`)
//     }
// }

// class Son extends Father{
//     //3 property
//     //2 methods
//     car="Audi"
//     displayCar(){
//         console.log(`I have ${this.car}`)
//     }
// }

// let shantanu=new GrandFather()
// console.log(shantanu)
// let Waman=new GrandFather()
// console.log(Waman)
// Waman.displayMoney()//2000
// //Waman.displayCar()
// console.log(Waman.surname)
// console.log(Waman.money)

// Waman.money=5000;
// console.log(Waman)


// let Mahendra =new Father()
// console.log(Mahendra)
// //Mahendra.displayCar()
// Mahendra.displayHome()
// Mahendra.displayMoney()

// let Vaibhav=new Son()
// console.log(Vaibhav.money)
// console.log(Vaibhav.surname)
// console.log(Vaibhav.car)
// console.log(Vaibhav.home)
// Vaibhav.displayCar()
// Vaibhav.displayHome()
// Vaibhav.displayMoney()

//========================================================================================

//Parent having constructor and child dont have constructor
// class GrandFather{
//     constructor(surname, money){
//         this.surname=surname
//         this.money=money
//     }
//     displayMoney(){
//         console.log(this.money)
//     }
// }

// class Father extends GrandFather{
//     home="shreeNiwas"
//         displayHome(){
//             console.log(`I have my own house name as ${this.home}`)
//         } 
// }

// let Santosh=new GrandFather("shinde",200)
// console.log(Santosh.surname)
// console.log(Santosh.money)
// //console.log(Santosh.home)//error
// Santosh.displayMoney()
// //Santosh.displayHome()

// let Ganesh=new Father("Raut",8000)
// console.log(Ganesh)
// console.log(Ganesh.surname, Ganesh.money, Ganesh.home)
// Ganesh.displayHome()
// Ganesh.displayMoney()

//==========================================================================

//Parent having constructor and child also have constructor

// class GrandFather{
//     constructor(surname, money){
//         this.surname=surname
//         this.money=money
//     }
//     displayMoney(){
//         console.log(this.money)
//     }
// }

// class Father extends GrandFather{
//     constructor(surname,money,home){
//         super(surname,money)
//         this.home=home
//     }
//     displayHome(){
//         console.log(`Home name ${this.home}`)
//     }
// }

// let ankush=new Father("Kute",7000,"shreesVaibhav")
// console.log(ankush)

// let ram=new GrandFather("malpathak",9000)
// console.log(ram)


// let mayuri={}

// mayuri.fullName="mayuriKatwe"


//single level
//multi level
//multiple


//======================================================================


//texing()  ==> 1 feature
//multimedia()  => texing()+multimedia()
//calling() => texing () , mulimedia(), calling()


class WhatsApp1{
    texing(){
        console.log('I am texing feature')
    }
}

class WhatsApp2 extends WhatsApp1{
    multiMedia(){
        console.log('I am multimedia feature')
    }
}

class WhatsApp3 extends WhatsApp2{
    calling(){
        console.log('I am calling feature')
    }
}

let testWhatsApp=new WhatsApp3()
console.log(testWhatsApp)

testWhatsApp.texing()
testWhatsApp.multiMedia()
testWhatsApp.calling()
