import { useState } from "react";
import Form from "./Components/Form";
import Content from "./Components/Content";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [Items, setItems] = useState(JSON.parse(localStorage.getItem("list"))||[]);
  const [newItem, setNewItem] = useState("");

  const additem = (nitem) => {
    const listUpdate = [
      ...Items,
      {
        id: Items.id ? Items[Items.length - 1].id + 1 : 1,
        text: nitem,
      },
    ];
    setItems(listUpdate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    additem(newItem);
  };

  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(Items));
  }, [Items])
  return (
    <div className="App">
      <h1>Lets learn about the local storage and use Effect</h1>
      <Form
        newItem={newItem}
        handleSubmit={handleSubmit}
        setNewItem={setNewItem}
      />
      <Content items={Items} />
    </div>
  );
}

export default App;
