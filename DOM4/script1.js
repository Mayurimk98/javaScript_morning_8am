{/* <h1 id="head">Heading</h1>
<input type="text">
<button>ChangeMeButton</button> */}

let heading=document.querySelector("#head")
console.log(heading)

//text
//console.log(heading.textContent)

let input=document.querySelector('input[type="text"]')
console.log(input)

//input.value="Mayuri"

let button=document.querySelector('button')
console.log(button)

button.addEventListener('click',function(){
heading.textContent=input.value;
heading.style.color=input.value
input.value=""
})