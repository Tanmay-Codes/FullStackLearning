import React, { useState } from "react";

export default function List({items, clickHandler, clickHandler2}) {

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
