import React from 'react';
import Card from './Card'; 

function CardList({ items, removeItem, updateTitle, toggleDone }) {
  return (
    <ul className="product-list">
      {items.map(item => (
        <li className='product-item' key={item.id}>
          <Card
            item={item}
            removeItem={removeItem}
            updateTitle={updateTitle}
            toggleDone={toggleDone}
          />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
