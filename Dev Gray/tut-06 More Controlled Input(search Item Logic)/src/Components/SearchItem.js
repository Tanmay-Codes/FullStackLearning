import React from 'react'

export default function SearchItem({search, setsearch}) {
  return (
    <form className='form' onSubmit={(e)=> e.preventDefault()}>
        <label>Search Item</label>
        <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='search'
        value={search}
        onChange= {(e)=> setsearch(e.target.value)}
        />
    </form>
  )
}
