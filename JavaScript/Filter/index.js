
const h1El = document.createElement("h1")
h1El.textContent = "Рост учеников"
document.body.append(h1El)

const addBtn = document.createElement("button")
addBtn.textContent = "Добавить рост"
addBtn.style.backgroundColor = "yellow"
addBtn.style.padding = "7px"
addBtn.style.borderRadius = "8px"
document.body.append(addBtn)

const findBth = document.createElement("button")
findBth.textContent = "Фильтровать"
findBth.style.backgroundColor = "blue"
findBth.style.color = "white"
findBth.style.padding = "14px"
findBth.style.borderRadius = "12px"
document.body.append(findBth)

const growth = [164, 157, 160, 143, 170]
const ulEl = document.createElement("ul")
ulEl.style.listStyleType = "none"
ulEl.style.padding = "0"

const liEl = []
let counter = 1

for (const addGrowth of growth) {
    const li = document.createElement("li")
    li.textContent = `${counter} ${addGrowth}`
    ulEl.append(li)
    liEl.push(li)
    counter++
}
document.body.appendChild(ulEl);

addBtn.onclick = function () {
    const addGrowth = prompt("Введите рост")
    if (!addGrowth) {
        alert("Рост не введён!")
    } else {
        growth.push(addGrowth)
        const li = document.createElement("li")
        li.textContent = `${counter})${addGrowth}`
        ulEl.append(li)
        liEl.push(li)
        counter++
    }
}


const resultBlock = document.createElement("div")
document.body.appendChild(resultBlock)
findBth.onclick = function () {
    const filter = []
    ulEl.remove()
    resultBlock.innerHTML = ""
    const minGrowth = prompt("Введите рост")
    for (const item of growth) {
        if (item >= minGrowth) {
            filter.push(item)
        }
    }
    const ul = document.createElement("ul")
    let counter = 1
    for (const value of filter) {
        const li = document.createElement("li")
        li.textContent = `${counter}) ${value}`
        li.style.listStyleType = "none"
        ul.style.padding = "0px"
        ul.appendChild(li)
        counter++
    }

    resultBlock.appendChild(ul)
}




