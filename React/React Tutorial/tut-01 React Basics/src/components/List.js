import React, { useState } from "react";

export default function List() {
  const [items, setItems] = useState(["item-1", "item-2"]);
  const clickHandler = () => {
    setItems([...items, "new-Item"]);
  };
  const clickHandler2 = () => {
    const index = items.length;
    setItems(items.filter((i) => i != items[index - 1]));
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
