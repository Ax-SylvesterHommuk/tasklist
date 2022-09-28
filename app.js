const form = document.querySelector("form")
const taskInput = document.querySelector("#task")

form.addEventListener("submit", addTask)

function addTask(event) {
    console.log(taskInput.value)
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = "collection-item"
    console.log(li)
    event.preventDefault()
}