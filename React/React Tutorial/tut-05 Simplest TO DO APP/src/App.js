import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import AddPlan from "./components/AddPlan";
import './App.css'
function App() {
  const listItems = [];
  const [items, setItems] = useState(listItems)
  const addItem = (element)=>{
    setItems([...items, {
      id: items.length ? items[items.length-1].id + 1 : 1,
      text: element,
      done: false
    }])
  } 
  const [newItem, setNewItem] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!newItem) return;
    setNewItem('')
    addItem(newItem)
  }
  const handleClick = (id) => {
    const listupdate = items.map((item) => id=== item.id ? {...item, done: !item.done} : item)
    setItems(listupdate);
  }
  const handledelete = () => {
    const listupdate = items.filter((item)=> !item.done )
    setItems(listupdate);
    console.log(listupdate)
  }
  return (
    <div className="App">
      <Header />
      <AddPlan newItem={newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      handledelete = {handledelete}
      />
      <Content  listItems={items}
      handleClick = {handleClick} />
    </div>
  );
}

export default App;
