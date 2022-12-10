import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import List from './components/List';
import AddItems from './components/AddItems';
function App() {
  const [items, setItems] = useState([]);
  const clickHandler = () => {
    setItems([...items, "new-Item"]);
  };
  const clickHandler2 = () => {
    const index = items.length;
    setItems(items.filter((i) => i != items[index - 1]));
  };

  const addnewitem = (i) => {
    setItems([...items, i]);
  }

  const [newItems, setnewItem] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    setnewItem('')
    addnewitem(newItems)
  }
  return (
    <div className="App">
      <p>Hello World</p>
      <AddItems 
      setnewItem = {setnewItem}
      newItems = {newItems}
      handleSubmit={handleSubmit}
      />
      <Header />
      <Counter />
      <List
      items ={items}
      clickHandler = {clickHandler}
      clickHandler2 = {clickHandler2}
      />
    </div>
  );
}

export default App;
