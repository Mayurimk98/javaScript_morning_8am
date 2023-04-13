//<h1 id="one"  class="two"  heading="head">Shree Ganesh</h1>


//1. by id
let byId=document.querySelector('#one')
console.log(byId)

//2. by class
let byClass=document.querySelector('.two')
console.log(byClass)

//3. by TagName

let byTagName=document.querySelector('h1')
console.log(byTagName)

//4. by common formula => taganem[attribute="value"]
let cf=document.querySelector('h1[heading="head"]')
console.log(cf)