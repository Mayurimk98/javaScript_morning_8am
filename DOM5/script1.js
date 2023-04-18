let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input[type="text"]')
let addMebtn = document.querySelector('#addBtn')


//Step1

addMebtn.addEventListener('click', function () {
    let inputText = inputBox.value //cherry
    let newLiEle = document.createElement('li') //<li></li>
    newLiEle.textContent = inputText //<li>cherry</li>
    //Step3
    createButton(newLiEle)
    ulList.appendChild(newLiEle)
    inputBox.value = ""

})

//Step4

ulList.addEventListener('click', function (event) {
    // console.log(event.target.tagName)
    if (event.target.tagName == "BUTTON") {
        if (event.target.className == "remove") {
            let liEle = event.target.parentElement
            let ulEle = liEle.parentElement
            ulEle.removeChild(liEle)//removed li from ullist
        }
        else if (event.target.className == "up") {
            let liEle = event.target.parentElement
            let prevLi = liEle.previousElementSibling
            let ulEle = liEle.parentElement
            if (prevLi) {
                ulEle.insertBefore(liEle, prevLi)
            }
        }
        else if (event.target.className == "down") {
            let liEle = event.target.parentElement //li
            let nextLi = liEle.nextElementSibling //nextli
            let ulEle = liEle.parentElement
            if(nextLi){
                ulEle.insertBefore(nextLi, liEle)
            }
        }
    }

})






//Step 2

function createButton(liElement) {
    // <button class="remove">Remove</button> 
    // <button class="up">Up</button>
    // <button class="down">Down</button></li>
    let remove = document.createElement('button') //<button></button>
    remove.textContent = "Remove"//<button>Remove</button>
    remove.className = "remove" //<button class="remove">Remove</button>
    liElement.appendChild(remove)

    let up = document.createElement('button') //<button></button>
    up.textContent = "Up"
    up.className = "up"
    liElement.appendChild(up)

    let down = document.createElement('button')
    down.textContent = "Down"
    down.className = "down"
    liElement.appendChild(down)

}