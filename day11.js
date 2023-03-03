
//1-5 random number

//console.log(Math.floor(Math.random()*5)+1) //0.0-0.99 ==> 0.0-4.95  ==> 0-4  ==> 1-5


//guessing game

//system random no==> Math.floor(Math.random()*5)+1  => 4

//user input number ==> 4

//system random no==user input ==> guess correct


//PROGRAM 1
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)

// let userInput = prompt("Please enter any number between 1-5")

// if (randomNumber == userInput) {
//     console.log('Your guess is correct !!!!')
// }
// else {
//     console.log('Your guess is incorrect!!!')
// }


//PROGRAM 2

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)

// let userInput = prompt("Please enter any number between 1-5")

// randomNumber == userInput ? console.log('Your guess is correct...') : console.log('Your guess is incorrect....')

//PROGRAM 3

let randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber)
console.log(typeof randomNumber)

let userInput = Number(prompt("Please enter any number between 1-5"))
console.log(typeof userInput) //number

if (randomNumber === userInput) {
    console.log('Your guess is correct !!!!')
}
else {
    console.log('Your guess is incorrect!!!')
}


//==  ==> value check
//=== ===> value /datatype





















//prompt ==> window ==> broweser (chrome/ IE/ FF)  => HTML

//how to make html file
//go to new file ==> give name as filename.html
//press shift+1  => ! ==> enter