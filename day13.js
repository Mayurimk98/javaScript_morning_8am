// let randomNumber = Math.floor(Math.random() * 5) + 1 //1-5
// console.log(randomNumber)//1

// let userInput = Number(prompt("Enter any no between 1-5"))//1

// while (randomNumber != userInput) {//1!=1
//     userInput = Number(prompt("Enter any no between 1-5"))
//     if (randomNumber === userInput) {
//         console.log('Guess correct')
//     }
//     else {
//         console.log('Guess incorrect')
//     }
// }

//do while

// let i=0
// do{
//     console.log(i)
//     i++
// }
// while(i<=5)
//0-5


let randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber) //2
let userInput
do {
    userInput = Number(prompt('Enter any no between 1-5')) //2
    if (randomNumber === userInput) {//2===2
        console.log('guess is correct')
        break;
    }
    else {
        console.log('Guess is incorrect')
    }
}
while (randomNumber != userInput)//2!=2

//single
//5 chance=> for loop
//infine=> while loop
