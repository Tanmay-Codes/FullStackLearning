import react, {useState} from 'react';
import './App.css';
import Lists from './Components/Lists';
import AddItems from './Components/AddItems';

function App() {
  // const items = ["Item-1", "Items-2", "Item-3"];
  const [items, setItems] = useState(["Item-1", "Items-2", "Item-3"]);
  const addItemHandler = (newtext)=>{
    setItems(items.concat(newtext));
  }
  return (
    <div className='center'>
      <h1 style={{margin:"50px 0"}}>This is A to-do List</h1>
      <AddItems onAdd = {addItemHandler}></AddItems>
      <Lists data = {items}></Lists>
      
    </div>
  );
}

export default App;
