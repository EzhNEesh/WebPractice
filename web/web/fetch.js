function loadPhoto() {
    addPreloader()
    let randomID = Math.floor(Math.random() * 5000) + 1
    fetch('https://jsonplaceholder.typicode.com/photos/' + randomID)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            else {
                throw Error
            }
        })
        .then(PromiseResult => {
            addPhoto(PromiseResult)
        })
        .catch (()=>{
            removePreloader()
            alert('⚠ Что-то пошло не так')
        })
}

function addPreloader () {
    let addButton = document.getElementsByClassName('content__add_button')
    addButton[0].style.display = 'none'

    let preload = document.getElementsByClassName('content__preloader')
    preload[0].style.display = 'block'
}

function removePreloader() {
    let preload = document.getElementsByClassName('content__preloader')
    preload[0].style.display = 'none'

    let addButton = document.getElementsByClassName('content__add_button')
    addButton[0].style.display = 'block'
}

function addPhoto(data) {
    // let container = document.querySelector('#img-container')
    // let img = document.createElement("IMG")
    // img.src = data['thumbnailUrl']
    // container.append(img)
    let container = document.querySelector('#img-container')
    let temp = document.querySelector('#img-item')
    let img = temp.content.querySelector('img')
    //let img = document.createElement("IMG")
    img.src = data['thumbnailUrl']
    //contItem.append(img)
    //contItem.appendChild(img)
    let cloneCont = temp.content.cloneNode(true)
    container.append(cloneCont)
    removePreloader()
}