import {useState} from "react";
import Header from "./Components/Header";
import AddItems from "./Components/AddItems";
import SearchItem from "./Components/SearchItem";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
function App() {
  
 //Default list of the Items here 
 const itemsArray = [];

// Declaring the State Hook here
const [items, setItems] = useState(itemsArray);
const [newItem, setnewItem] = useState('')
const [search, setsearch] = useState('')

const additem = (nitem)=>{
  const updatelist = [...items, {
    id: items.length ? items[items.length -1].id + 1 : 1,
    checked: false,
    item: nitem
  }]
  setItems(updatelist);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  if (!newItem) return;
  setnewItem('');
  additem(newItem)
}

// Declaring the Check Item function here
const handleChecked = (id) => {
  const listItems = items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  setItems(listItems);
  // here we can save the changes in the local storage so that we can open and load the changes makes before
  localStorage.setItem("goallist", JSON.stringify(listItems));
};

// Declaring the Delete Item function here
const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id != id);
  setItems(listItems);
  // here we can save the changes in the local storage so that we can open and load the changes makes before
  localStorage.setItem("goallist", JSON.stringify(listItems));
};
  return (
    <div className="App">
      <Header />
      <AddItems 
      handleSubmit={handleSubmit}
      setnewItem = {setnewItem}
      newItem = {newItem}
      />
      <SearchItem 
      search = {search}
      setsearch = {setsearch}
      />
      <Content
      // here item.filter is used to filter out the state of search item shows in the search
      items = {items.filter(item=> ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
      handleChecked= {handleChecked}
      handleDelete = {handleDelete}
      />
      <Footer 
      n = {items.length}
      />
      
    </div>
  );
}

export default App;
