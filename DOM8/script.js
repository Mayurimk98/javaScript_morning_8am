
// //<h1 id="std" class="ten" name="nm">StudentList</h1>

// //Single element

// let h1=document.querySelector('h1')
// console.log(h1)

// {/* <li>Mayuri</li>
// <li>Jaya</li>
// <li>Sathish</li>
// <li>Vaibhav</li> */}

// let liEle=document.querySelector('li')
// console.log(liEle)

// //multiple element
// //NodeList ==> static
// let allLi=document.querySelectorAll('li')
// console.log(allLi)

// for(let i=0;i<allLi.length;i++){
//     console.log(allLi[i].textContent)
// }

// console.log(allLi.length)

// //HTMLcollection => dynamic

// let allLibyHtml=document.getElementsByTagName('li')
// console.log(allLibyHtml)

// console.log(allLibyHtml.length)

//=======================================================

//<h1 id="std" class="ten one two" name="nm">StudentList</h1>

//by tagname
//bt id
//by classname
//cf

//document.queryselector()

let y1=document.getElementById('std')
console.log(y1) //htmlelement

let y2=document.getElementsByClassName('ten')
console.log(y2)//htmlcollection

let y3=document.getElementsByName('nm')
console.log(y3)//nodeList

let y4=document.getElementsByTagName('h1')
console.log(y4)

//====================================================

let ele=document.querySelector('h1')
console.log(ele.className)

console.log(ele.classList)

//<h1 id="std" class="ten three one four" name="nm">StudentList</h1>
//add()
// ele.classList.add('five')
// console.log(ele.classList)

// ele.classList.remove('ten')
// console.log(ele.classList)

//toggle
ele.classList.toggle('four')
console.log(ele.classList)


ele.classList.toggle('four')
console.log(ele.classList)

//==============================================

console.log(ele.getAttribute('id'))

ele.setAttribute('newAttri', 'new')
console.log(ele)











