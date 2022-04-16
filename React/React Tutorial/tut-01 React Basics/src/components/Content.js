import React, {useState} from 'react'

export default function Content() {

    const items = ["Apple", "Mango", "Banana"];
    const n = Math.floor(Math.random()*3);
    const fruit = items[n];
    const [myfruit, SetMyfruit] = useState(fruit);
    const clickHandler = () => {
        SetMyfruit(fruit + " and " + " Pears.");
    };
  return (
    <div>I want to eat {myfruit}
    <div>
        <button onClick = {clickHandler}>click Me</button>
    </div>
    </div>
  )
}
