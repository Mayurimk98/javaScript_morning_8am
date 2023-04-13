

{/* <h1 id="std">Student</h1>
<input class="cls" type="text">
<button id="btn">Add Me</button> */}

let heading = document.querySelector('h1')
let input = document.querySelector('.cls')
let button = document.querySelector('#btn')


button.addEventListener('click', function () {
    //console.log(input.value)

    let text = input.value
    heading.textContent = text
    heading.style.color=text
    input.value = ""
})