import { useState } from "react";
import Form from "./Components/Form";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import "./App.css";

function App() {

  // ***************API here***********
  const API_URL = "http://localhost:3500/Items";
  
  
  // *********** States are defined here*****************

  const [Items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //**************USE Effect is here******************** 

  useEffect(() => { 
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Unexpected response recieved");
        const listItems = await response.json();
        setItems(listItems);
        setFetchErr(null);
      }catch(err){
        setFetchErr(err.message);
      }
      finally{
        setIsLoading(false);
      }
    }

    setTimeout(()=> {
      fetchItems();
    }, 2000)
  }, []);
// Empty array dpendency means it only effect once at load time


  // ***************Add Item Function here*********************
  const additem = (nitem) => {
    const listUpdate = [
      ...Items,
      {
        id: Items.length ? Items[Items.length - 1].id + 1 : 1,
        text: nitem,
      },
    ];
    console.log(listUpdate);
    setItems(listUpdate);
  };

  //**************Delete Function is here******************** 

  const handleDelete = () => {
    const listUpdate = Items.filter((item) => item.id !== Items.length);
    // const listUpdate = []
    console.log(listUpdate);
    setItems(listUpdate);
  };

  //**************Submit  Function is here******************** 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    additem(newItem);
  };

  // *****************************************************************
  return (
    <div className="App">
      <h1>Lets learn about the local storage and use Effect</h1>
      <Form
        newItem={newItem}
        handleSubmit={handleSubmit}
        setNewItem={setNewItem}
        handleDelete={handleDelete}
      />
      <Content items={Items} />
      <div>
        {isLoading && <p>Loading Items...</p>}
        {fetchErr && <p>{`Error : ${fetchErr}`}</p>}
      {!fetchErr && !isLoading && <Footer length = {Items.length}/>}
      </div>
    </div>
  );
}

export default App;
