

// <h1 id="heading">Students</h1>
// <ul>
//     <li>Mayuri</li>
//     <li>Kalpesh</li>
//     <li>Mahesh</li>
//     <li>Pranali</li>
// </ul>


//SingleElement

let h1=document.querySelector('#heading')
console.log(h1)

let headingEle=document.getElementById('heading')
console.log(headingEle)


//MultipleELement
//NodeList => static
let liEle=document.querySelectorAll('li')
console.log(liEle)
console.log(liEle.length)

console.log('==========')

let liList=document.getElementsByTagName('li')
console.log(liList)
console.log(liList.length)