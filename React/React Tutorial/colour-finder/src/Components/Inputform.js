import React from 'react'

export default function Inputform({cname, setcName, handleSubmit}) {
  return (
    <form className='form' onSubmit={handleSubmit}>
        <input 
        required
        autoFocus
        placeholder='grey'
        value={cname}
        onChange = {(e) => setcName(e.target.value)}
        ></input>
        <button type='submit'></button>

    </form>
  )
}
