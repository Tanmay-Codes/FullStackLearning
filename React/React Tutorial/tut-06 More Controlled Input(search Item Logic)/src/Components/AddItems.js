import React from 'react'
import { useRef } from 'react'

export default function AddItems({newItem, setnewItem, handleSubmit}) {
    const inputRef = useRef();
  return (
    <form className='form' onSubmit={handleSubmit}>
        <label>Add Items</label>
        <input 
        id='add'
        autoFocus
        ref={inputRef}
        required
        type="text"
        value={newItem}
        onChange = {(e)=> setnewItem(e.target.value)}
        />
        <button 
        id='addbutton' 
        type='submit'
        aria-label='Add Item'
        onClick={()=> inputRef.current.focus()}
        
        
        >Add</button>
    </form>
  )
}
