{/* <h1>Students List</h1>
<ul>
    <li>Mayuri</li>
    <li>ShreeRam</li>
    <li>Sham</li>
    <li>Jaya</li>
    <li>Amit</li>
</ul>
<input type="text">
<button>AddMe</button> */}

let ulList = document.querySelector('ul')
console.log(ulList)

let inputBox = document.querySelector('input')
console.log(inputBox)

let button = document.querySelector('button')
console.log(button)


//<li>Mayuri</li>
//textcontet


// let newLiElement={
//     //textContent="text"
// }
// newLiElement.textContent=newValue


button.addEventListener("click", function () {
    let text = inputBox.value //vaibhav
    let newLiElement = document.createElement('li') //<li></li>
    newLiElement.textContent=text //<li>vaibhav</li>
    ulList.appendChild(newLiElement)
    inputBox.value=""

})
