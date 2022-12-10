import React, { useState } from "react";

export default function List() {
  const [items, setItems] = useState(["item-1", "item-2"]);
  const clickHandler = () => {
    const addItem = () => {
      setItems([...items, "new-Item"]);
    }
    addItem();
  };
  const clickHandler2 = () => {
    const index = items.length;
    const delItem = () =>{
      setItems(items.filter((i) => i != items[index - 1]));
    }
    delItem();
  };
  return (
    <div>
      <button onClick={clickHandler}>Add Item to list</button>
      {items.map((item, index) => (
        <li>{item}</li>
      ))}
      <button onClick={clickHandler2}>Delete Item from List</button>
    </div>
  );
}
