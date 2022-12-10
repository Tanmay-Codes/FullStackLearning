import { useState } from 'react';
import { useEffect } from 'react';
import Content from './Content';
import './App.css';

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  // const [req, setreq] = useState('users');
  const req = "users";
  const [fetchErr, setfetchErr] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async() => {

      try{
        const response = await fetch(`${API_URL}${req}`);
        if (!response.ok) throw Error("Something went wrong Please Reload!!")
        const listItem = await response.json();
        setfetchErr(null);
        setItems(listItem);
      } catch(err){
        console.log(err.message);
        setfetchErr(err.message);
      } 
    }
    fetchItems();
  }, [req]);
  
  return (
    <div className="App">
      <h1>CRUD practice "READ"</h1>
      <main>
      {fetchErr && <p>{fetchErr}</p>}
      {!fetchErr && <Content items = {items}/>}
      </main>

    </div>
  );
}

export default App;
