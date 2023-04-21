
let lielement = document.querySelector('li')
console.log(lielement)

let liList = document.querySelectorAll('li')
console.log(liList)
//Nodelist  ==> static 

// for (let i = 0; i < liList.length; i++) {
//     console.log(liList[i].textContent)
//     if (i % 2 == 0) {
//         liList[i].style.color = "Red"
//     }
//     else {
//         liList[i].style.color = "Yellow"
//     }
// }

// console.log(liList.length)

// //HTML collection

// let liList1=document.getElementsByTagName('li')
// console.log(liList1)

// console.log(liList1.length)

//======================================================================

//<h1 id="one" class="two" name="nm">FruitsList</h1>
let byId=document.getElementById('one')
console.log(byId) //html element


let byClassName=document.getElementsByClassName('two')
console.log(byClassName) //htmlCollection

let byName=document.getElementsByName("nm")
console.log(byName) //nodeList

let byTagName=document.getElementsByTagName('h1')
console.log(byTagName) //htmlCollection

//==============================================================
//<h1 id="one" class="two three four" name="nm">FruitsList</h1>

let ele=document.querySelector('h1')
console.log(ele)

// console.log(ele.className)

// console.log(ele.classList)

// //to add
// ele.classList.add('ten')
// console.log(ele.classList)

// //to remove
// ele.classList.remove('two')
// console.log(ele.classList)

//toggle

// ele.classList.toggle('three')
// console.log(ele.classList)

// ele.classList.toggle('three')
// console.log(ele.classList)

//===========================================

let getID=ele.getAttribute('name')
console.log(getID)

ele.setAttribute('text','txt')
console.log(ele)
















