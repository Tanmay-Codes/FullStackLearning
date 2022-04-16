import React from "react";

export default function Content({ listItems, handleClick }) {
  return (
    <div>
      {listItems.map((item) => (
        <li key={item.id}>
            {item.text}  
            <input
            type="checkbox"
            checked= {item.done}
            onChange = {() => handleClick(item.id)}
            />          
        </li>

      ))}
    </div>
  );
}
