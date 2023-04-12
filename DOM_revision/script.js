

//HTML => to create webelement

//CSS => style guide

//JS => user interaction

//<h1 id="studentname" class="two" name="nm">Mayuri</h1>


//1. by id
let a=document.querySelector('#studentname')
console.log(a)

//2. by class
let b=document.querySelector(".two")
console.log(b)

//3. by tagName
let c=document.querySelector('h1')
console.log(c)

//4. cf tagName[attibute="value"]
let d=document.querySelector("h1[name='nm']")
console.log(d)

console.log(a.textContent)

let inputBox=document.querySelector('input')
console.log(inputBox)
inputBox.value="minskole"




// let person={
//     firstName:"mayuri"
// }

// person.firstName
// person.firstName="vaibhav"
// person.skill="java"


// let html={
//     textcontent:mayuri
// }


