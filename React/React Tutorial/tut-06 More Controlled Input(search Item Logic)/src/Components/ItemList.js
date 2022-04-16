import React from 'react';
import LineItems from './LineItems';

function ItemList({items, handleChecked, handleDelete}) {
  return (
    <ul>
          {items.map((items) => (
            <LineItems 
            key = {items.id}
            item = {items}
            handleChecked = {handleChecked}
            handleDelete = {handleDelete}
            />
          ))}
        </ul>
  )
}

export default ItemList