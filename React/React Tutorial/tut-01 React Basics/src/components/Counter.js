import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const clickHandler = ()=> {
        setCount(count+1);
        console.log(count);

    }
    const clickHandler2 = ()=> {
        setCount(count-1);
        console.log(count);

    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={clickHandler}>
            Add 1
        </button>
        <button onClick={clickHandler2}>
            Sub 1
        </button>
    </div>
  )
}
