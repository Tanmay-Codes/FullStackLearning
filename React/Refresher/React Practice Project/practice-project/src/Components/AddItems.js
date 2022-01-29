import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function AddItems(props) {
  const [addtext, setText] = useState('')
  const clickHandler = (e)=>{
    e.preventDefault();
    props.onAdd(addtext)
    //here the set text set to the initial state where the input box was having no value before add button.
    setText('')
  }
  const textHandler = (e)=>{
    setText(e.target.value)
  }
  return <div>
      <form>
          <input type="Text" value={addtext} onChange={textHandler}></input>
          <button onClick={clickHandler}>Add</button>
      </form>
  </div>;
}
