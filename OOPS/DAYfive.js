
// //oops  => 
// //1. inheritance => extends

// //single level => 2
// //muli level => more than 2
// //hirarichal => 1 parent => multiple child

// //2. Polymorphism

// //poly => many
// //morphism => form

// //boy => friend, son, student, husband, bf

// //1 function /method => diff state


// // 1. overriding => diff class, same method name, same signature


// // WO=> L S==> 

// class WorldBank {
//     loan() {
//         console.log('I am loan from WB')
//     }

//     save() {
//         console.log('I am save from WB')
//     }
// }

// class SBI extends WorldBank {
//     loan() {
//         console.log('I am loan from SBI')
//     }
//     save() {
//         console.log('I am save from SBI')
//     }
// }

// class HDFC extends SBI {
//     loan(){
//         console.log(' I am loan from HDFC')
//     }
//     save(){
//         console.log('I am save from HDFC')
//     }

// }

// let hdfc=new HDFC()
// hdfc.loan()
// hdfc.save()

// let sbi=new SBI()
// sbi.loan()
// sbi.save()

// let wo=new WorldBank()
// wo.loan()
// wo.save()


//=================================================
class WorldBank {
    loan() {
        console.log('I am loan from WB')
    }

    save() {
        console.log('I am save from WB')
    }
}

class SBI extends WorldBank {
    loan() {
        super.loan()
        console.log('I am loan from SBI')
    }
    save() {
        console.log('I am save from SBI')
    }
}

class HDFC extends SBI {
    loan(){
        super.loan()
        console.log(' I am loan from HDFC')
    }
    save(){
        console.log('I am save from HDFC')
    }

}

let hdfc=new HDFC()
hdfc.loan()// I am loan from HDFC
hdfc.save()












// // 2. overloading


