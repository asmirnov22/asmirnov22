import { useState } from 'react'
import useList from './useList'
import CardList from './CardList'; 
import './App.css'

function App() {
  const {
    items,
    addItem,
    removeItem,
    updateTitle,
    toggleDone
  } = useList();

  return (
    <>
      <div className="app">
        <h2 className="h2">Список покупок</h2>

        

        <CardList
          items={items}
          removeItem={removeItem}
          updateTitle={updateTitle}
          toggleDone={toggleDone}
        />
      <button className='btn' onClick={addItem}>Новый элемент</button>
      </div>
    </>
  )
}

export default App
