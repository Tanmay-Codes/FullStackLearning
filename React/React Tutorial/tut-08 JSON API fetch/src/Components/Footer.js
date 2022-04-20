import React from 'react'

export default function Footer({length}) {
  return (
    <div>{length?<h3>The list has {length} items</h3> : <h3>The list is empty</h3>}</div>
  )
}
