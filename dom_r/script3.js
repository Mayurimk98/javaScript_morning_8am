

{/* <ul>
<li>Mayuri</li>
<li>Vaibhav</li>
<li>Jaya</li>
<li>Sathish</li>
//<li>Ganesh</li>

</ul>

<input type="text">
<button>Add Me</button> */}


let ulList = document.querySelector('ul')
let inputBox = document.querySelector("input[type='text']")
let addMeBtn = document.querySelector('button')


addMeBtn.addEventListener('click', function () {
    let inputValue = inputBox.value

    let newLiElement = document.createElement("li") //<li></li>

    newLiElement.textContent = inputValue //<li>Ganesh</li>

    ulList.appendChild(newLiElement)

    inputBox.value=""




})