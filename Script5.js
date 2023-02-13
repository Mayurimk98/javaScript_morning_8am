//conditional statements

//if

//else if

//if else

// let marks = 99

// if (marks > 90) {
//     console.log('best')
// }
// if (marks > 70) {
//     console.log('better')
// }
// if (marks > 60) {
//     console.log('good')
// }


// let marks = 65

// if (marks > 90) {
//     console.log('best')
// }
// else if (marks > 70) {
//     console.log('better')
// }
// else if (marks > 60) {
//     console.log('good')
// }


// let marks = 50

// if (marks > 90) {
//     console.log('best')
// }
// else if (marks > 70) {
//     console.log('better')
// }
// else if (marks > 60) {
//     console.log('good')
// }
// else{
//     console.log('invalid input')
// }


// let a = 20
// let b = 100
// if (a > b) {
//     console.log('A is greater')
// }
// else{
//     console.log('B is greater')
// }

//ternary operator  => single condition

//syntax
//condition ? true :false
//a > b ? console.log('A is greater') : console.log('B is greater')

// let result = a > b ? 'A is greater' : 'B is greater'
// console.log(result)


//====================================================================

//switch case ==> multiple condition

//1. switch case without break

// 1 => monday  2 => tuesday 3 => wednesday

// let day
// if (day == 1) {
//     console.log('monday')
// }
// else if (day == 2) {
//     console.log('tuesday')
// }
// else if (day == 3) {
//     console.log('wednesday')
// }

// let day = 2
// switch (day) {
//     case 1:
//         console.log("monday")
//     case 2:
//         console.log('tuesday')
//     case 3:
//         console.log('wednesday')
//     case 4:
//         console.log('thrusday')
//     case 5:
//         console.log('friday')
//     case 6:
//         console.log('saturday')
//     case 7:
//         console.log('sunday')
// }

//2. switch case with break

// let day = 0
// switch (day) {
//     case 1:
//         console.log("monday")
//         break
//     case 2:
//         console.log('tuesday')
//         break
//     case 3:
//         console.log('wednesday')
//         break
//     case 4:
//         console.log('thrusday')
//         break
//     case 5:
//         console.log('friday')
//         break
//     case 6:
//         console.log('saturday')
//         break
//     case 7:
//         console.log('sunday')
//         break
// }



let day = 0
switch (day) {
    case 1:
        console.log("monday")
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wednesday')
        break
    case 4:
        console.log('thrusday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log('saturday')
        break
    case 7:
        console.log('sunday')
        break
    default:
        console.log('please enter correct number')
}



