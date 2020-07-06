const addTask = document.getElementById('addTask')
const addModel = document.getElementById('addModel')
const closeBtn = document.getElementById('closeBtn')

addTask.addEventListener('click',openModel)
closeBtn.addEventListener('click',closeModel)

function openModel(){
    addModel.classList.add('show')
}

function closeModel(){
    addModel.classList.remove('show')
}