const form = document.querySelector("form")
const taskInput = document.querySelector("#task")

form.addEventListener("submit", addTask)

function addTask(event) {
    console.log(taskInput.value)
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = "collection-item"
    const a = document.createElement("a")
    a.className = "blue-text text-darken 2 secondary-content"
    a.setAttribute("href", "#")
    li.appendChild(a)
    // Add to list
    const ul = document.querySelector("ul")
    ul.appendChild(li)
    console.log(li)
    event.preventDefault()
}



