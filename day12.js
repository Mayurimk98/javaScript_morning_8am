

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

let randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber)
for (let i = 0; i <= 5; i++) {
    let userInput = Number(prompt("Enter any number between 1-5"))
    if (randomNumber === userInput) {
        console.log("Your guess is correct!!!!")
    }
    else {
        console.log("Your guess is incorrect!!!!")
    }

}

















// for loop  => duration  is known
// while loop => duration is not known





















//== ==> value
//===  ==> value and datatype


//console.log(Number('1') )//string  => number
// console.log(1) //number











//window ==> browser ==> HTML

