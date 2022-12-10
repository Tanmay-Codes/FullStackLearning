import React from 'react'

export default function Content({items}) {
  return (
    <div>{items.map((item)=><li key={item.id}>{item.text}</li>)}</div>
  )
}
