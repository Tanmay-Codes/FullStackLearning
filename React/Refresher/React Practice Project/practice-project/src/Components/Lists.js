import React from "react";
import './Lists.css'

export default function Lists(props) {
  const item = items =>{
    return <li className="items card" key={items}><p>{items}</p><button>Done</button></li>
  }
  return (
    <div>
        {props.data.map(item)}
    </div>
  );
}
