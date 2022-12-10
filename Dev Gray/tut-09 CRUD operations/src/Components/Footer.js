import React from 'react'

export default function Footer({n}) {
  return (
    <div>
        <p> The list contains the total {n} {(n>1) ? "items" : "item" }</p>
    </div>
  )
}
