import React, { useState } from 'react'

const CustomHook = () => {
    const [colour, setColour] = useState("#000000");
    const [text, setText] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        alert(`${text}, ${colour}`);
        console.log("Fired")
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" placeholder="The colour here..." onChange={(e)=>setText(e.target.value)}></input>
            <input type="color" onChange={(e)=>setColour(e.target.value)}></input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CustomHook