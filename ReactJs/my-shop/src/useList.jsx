import { useState } from "react";

function useList() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: `Молоко`,
            done: true,
        },
        {
            id: 2,
            title: `Хлеб`,
            done: false,
        }
    ])
    const addItem = () => {
        const newItem = {
            id: Date.now(),
            title: ``,
            done: false,
        }
        setItems([...items, newItem])
    }

    const removeItem = (id) => {
        const newItems = items.filter(element => element.id !== id)

        setItems(newItems)
    }

    const updateTitle = (id, title) => {
        const updateList = items.map(element => {
            if (element.id == id) {
                return { ...element, title: title }
            }
            return element
        })

        setItems(updateList)
    }

    const toggleDone = (id) => {
        const updatedItems = items.map(element => {
            if (element.id === id) {
                return {
                    ...element,
                    done: !element.done
                }
            }
            return element
        })

        setItems(updatedItems)
    }

    return { items, addItem, removeItem, updateTitle, toggleDone }
}

export default useList
