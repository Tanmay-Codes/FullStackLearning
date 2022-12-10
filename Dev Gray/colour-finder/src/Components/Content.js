import React from 'react'

export default function Content({cname}) {
  return (
    <div>
        <div className='wrap'>
            <div className='box' style={{background: cname}}></div>
        </div>
    </div>
  )
}
