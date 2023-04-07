
//   <h1 id="one" class="two" name="nm">Students</h1>
//<> ==> opening tag
//</> ==> closing tag
//h1/p/ul ==> tagName
// id="one" ==> attribute =value
//<>text</>


//Html element ==> Object => property and methods


//To find element there are 4 ways

//<h1>Students</h1>


//1. id unique==> 
//2. class
//3. CF
//4. tagname

//1 by taganame
let byTagname = document.querySelector('h1')
console.log(byTagname)

//2. by ID(#)

let byID = document.querySelector('#one')
console.log(byID)

//3. By Class(.)
let byClass = document.querySelector('.two')
console.log(byClass)

//4. CF(tagName[attribute='value'])

let cf = document.querySelector('h1[name="nm"]')
console.log(cf)


// <input type="text">
// <button>Click Me</button>

let inputBox = document.querySelector('input[type="text"]')
console.log(inputBox)

let clickMeBtn = document.querySelector('button')
console.log(clickMeBtn)

// clickMeBtn.addEventListener('click', function () {
//     //  console.log(inputBox.value)
//     //  console.log(byTagname.textContent)
//     byTagname.textContent = inputBox.value
//     byTagname.style.color = inputBox.value

// })


// inputBox.value="Mayuri"
// console.log(inputBox.value)

// let input={
//     value:"Mayuri"
// }

// console.log(input.value)


// byTagname={
//     textContent:"red"
// }

// console.log(byTagname.textContent) //student
// byTagname.textContent="red"













