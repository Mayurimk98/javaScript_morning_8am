

//1-5

// Math.floor(Math.random()*5)+1 //0.0-0.99  ==> 0.0-4.95 ==>0-4 ==>1-5

//guessing game

//system random
//user input

//PROBLEM 1

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// let userInput = prompt("Enter any number between 1-5")
// // if (randomNumber == userInput) {
// //     console.log("Your guess is correct!!!!")
// // }
// // else {
// //     console.log('Your guess is incorrect!!!')
// // }

//with ternary

//PROBLEM 2

//randomNumber==userInput ? console.log('Your guess is correct.........'): console.log('your guess is incorrect.....')

//PROBLEM 3

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// console.log(typeof randomNumber)
// let userInput = Number(prompt("Enter any number between 1-5")) //string  => '4' => 4
// console.log(typeof userInput)
// if (randomNumber === userInput) {
//     console.log("Your guess is correct!!!!")
// }
// else {
//     console.log('Your guess is incorrect!!!')
// }


//PROBLEM 3


// 5 chance ==> for loop

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// for (let i = 0; i <= 5; i++) {
//     let userInput = Number(prompt("Enter any number between 1-5"))
//     if (randomNumber === userInput) {
//         console.log("Your guess is correct!!!!")
//     }
//     else {
//         console.log("Your guess is incorrect!!!!")
//     }

// }

//Problem 4(without break)
//1-5
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// for (let i = 1; i <= 5; i++) {
//     let userInput = Number(prompt('Please enter no between 1-5'))
//     if (randomNumber === userInput) {
//         console.log('Your guess is correct....')
//     }
//     else {
//         console.log('Your guess is incorrect')
//     }

// }

//===============================================================
//Problem 4(with break)

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// for (let i = 1; i <= 5; i++) {
//     let userInput = Number(prompt('Please enter no between 1-5'))
//     if (randomNumber === userInput) {
//         console.log('Your guess is correct....')
//         break;
//     }
//     else {
//         console.log('Your guess is incorrect')
//     }

// }


//=================================================================

//duration is unknown (while loop)


// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber) //4
// let userInput //undefined //3 //4
// while (randomNumber != userInput) { //4!=undefined ==>true  //4!=3 //4!=4
//     userInput = Number(prompt('please enter number between 1-5')) //3 //4
//     if (randomNumber === userInput) { //4 ===3 //4===4
//         console.log('Your guess is correct....')
//     }
//     else {
//         console.log('Your guess is incorrect')
//     }
// }



//console.log(4!="undefined") //true

//=========================================================================


//while loop
// let randomNo = Math.floor(Math.random() * 5) + 1 //3
// let userInput //undefined 2 3
// while (randomNo != userInput) { //3!=undefined => true  3!=2  3!=3
//     userInput = Number(prompt('enter ant no between 1-5')) //update 2 3
//     if (randomNo === userInput) {//3===2  3===3
//         console.log('Guess is correct...')
//     } else {
//         console.log('Guess is incorrect..')
//     }
// }


// let randomNo = Math.floor(Math.random() * 5) + 1  //5
// console.log(randomNo)
// let userInput //undefined 2 3
// while (randomNo != userInput) { 
//     userInput = Number(prompt('enter ant no between 1-5')) 
//     if (randomNo === userInput) {
//         console.log('Guess is correct...')
//         break;
//     } else {
//         console.log('Guess is incorrect..')
//     }
// }

//normal single chance
//5 chance for loop=> for loop break
//infinite while => while with break

// let randomNo = Math.floor(Math.random() * 5) + 1  //3
// console.log(randomNo) 
// let userInput = Number(prompt('enter ant no between 1-5'))// 3
// while (randomNo != userInput) { ///3!=3
//     userInput = Number(prompt('enter any no between 1-5'))
//     if (randomNo === userInput) { 
//         console.log('Guess is correct...')
//         break;
//     } else {
//         console.log('Guess is incorrect..')
//     }

// }










































// let a
// console.log(a)//undefined










// for loop  => duration  is known
// while loop => duration is not known





















//== ==> value
//===  ==> value and datatype


//console.log(Number('1') )//string  => number
// console.log(1) //number











//window ==> browser ==> HTML

