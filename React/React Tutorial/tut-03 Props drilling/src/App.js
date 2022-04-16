import Header from "./Components/Header";
import Content from "./Components/Content";
import {useState} from "react";
import Footer from "./Components/Footer";
function App() {
  
 //Default list of the Items here 
 const itemsArray = [
  {
    id: 1,
    checked: false,
    item: "Learning the basics of coding",
  },
  {
    id: 2,
    checked: false,
    item: "Practicing the code",
  },
  {
    id: 3,
    checked: false,
    item: "Apply for the Coding Job",
  },
];

// Declaring the State Hook here
const [items, setItems] = useState(itemsArray);

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
      <Content
      items = {items}
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
