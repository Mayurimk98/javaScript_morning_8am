
let inputBox = document.querySelector('input')
let addMeBtn = document.querySelector('#addBtn')
let ulList = document.querySelector('ul')

//<li>orange</li>

//Step1
addMeBtn.addEventListener('click', function () {
    let inputText = inputBox.value //orange
    let newLiEle = document.createElement('li') //<li></li>
    newLiEle.textContent = inputText //<li>orange</li>
    //Step3
    createButton(newLiEle)
    ulList.appendChild(newLiEle)
    inputBox.value = ""
})



//Step2

function createButton(liElement) {
    // <button class="remove">Remove</button> 
    // <button class="up">Up</button>
    // <button class="down">Down</button>   

    let remove = document.createElement('button') //<button></button>
    remove.textContent = "Remove" //<button>Remove</button>
    remove.className = "remove" //<button class="remove">Remove</button>
    liElement.appendChild(remove)

    let up = document.createElement('button') //<button></button>
    up.textContent = "Up"////<button>Up</button>
    up.className = "up"//<button class="up">Up</button>
    liElement.appendChild(up)

    let down=document.createElement("button")
    down.textContent="Down"
    down.className="down"
    liElement.appendChild(down)

}