
const h1El = document.createElement("h1")
h1El.textContent = "Домашняя библиотека"
document.body.append(h1El)

const addBtn = document.createElement("button")
addBtn.textContent = "Добавить книгу"
addBtn.style.backgroundColor = "yellow"
addBtn.style.padding = "7px"
addBtn.style.borderRadius = "8px"
document.body.append(addBtn)

const findBth = document.createElement("button")
findBth.textContent = "Найти"
findBth.style.backgroundColor = "blue"
findBth.style.color = "white"
findBth.style.padding = "14px"
findBth.style.borderRadius = "12px"
document.body.append(findBth)

const books = ["Мастер и Маргарита", "Гарри Поттер", "За пропастью во ржи", "Властелин колец", "Дюна", "Отцы и дети"]
const ulEl = document.createElement("ul")
ulEl.style.listStyleType = "none"
ulEl.style.padding = "0"

const liEl = []
let counter = 1

for (const book of books) {
    const li = document.createElement("li")
    li.textContent = `${counter}) ${book}`
    ulEl.append(li)
    liEl.push(li)
    counter++
}
document.body.appendChild(ulEl)

addBtn.onclick = function () {
    const bookName = prompt("Введите название книги")
    if (!bookName) {
        alert("Название книги не введено!")
    } else {
        books.push(bookName)
        const li = document.createElement("li")
        li.textContent = `${counter})${bookName}`
        ulEl.append(li)
        liEl.push(li)
        counter++
    }
}

findBth.onclick = function () {
    const bookFind = prompt("Какую книгу хотите найти?")
    let found = false
    for (let i = 0; i < books.length; i++) {
        if (bookFind === books[i]) {
            liEl[i].style.backgroundColor = "yellow"
            found = true
        } else {
            liEl[i].style.backgroundColor = ""
        }
    }

    if (!found) {
        alert("Книга не найдена")
    }
}

