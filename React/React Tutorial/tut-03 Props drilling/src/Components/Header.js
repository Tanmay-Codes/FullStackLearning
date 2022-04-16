import React from 'react'

function Header() {
  return (
    <div><p>This a tutorial-3</p>
    <p>This tutorial will teach how to use Prop Drilling from one Component to another</p>
    <p>Here Prop ArrayList, handleChecked, handleDelete are passed through content.js</p>
    <p>This content.js then further pass these props to the ItemsList.js  which implement logic of list is Empty</p>
    <p>ItemList then use the map function to print all the list items and pass the props further to the LineItems.js</p>
    <p>This LineItems.js then render the checkbox, text and then delete button</p>
    <h1>My List of To Do</h1>
    </div>
  )
}

export default Header