import { useState } from "react";
import Header from "./Components/Header";
import AddItems from "./Components/AddItems";
import SearchItem from "./Components/SearchItem";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import apiRequest from "./Components/apiRequest";
function App() {
  const API_URL = "http://localhost:3500/items";
  // Declaring the State Hook here
  const [items, setItems] = useState([]);
  const [newItem, setnewItem] = useState("");
  const [search, setsearch] = useState("");
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Something went wrong");
        const listItems = await response.json();
        setItems(listItems);
        setFetchErr(null);
      } catch (err) {
        setFetchErr(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const additem = async (nitem) => {
    const newitem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      checked: false,
      item: nitem,
    };
    const updatelist = [...items, newitem];
    setItems(updatelist);

    const postOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newitem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchErr(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setnewItem("");
    additem(newItem);
  };

  // Declaring the Check Item function here
  const handleChecked = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const myitem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ checked: myitem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchErr(result);
  };

  // Declaring the Delete Item function here
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchErr(result);
  };
  return (
    <div className="App">
      <Header />
      <AddItems
        handleSubmit={handleSubmit}
        setnewItem={setnewItem}
        newItem={newItem}
      />
      <SearchItem search={search} setsearch={setsearch} />
      <div>
        {isLoading && <p>Loading Items...</p>}
        {fetchErr && <p>{`Error : ${fetchErr}`}</p>}
        {!fetchErr && !isLoading && (
          <Content
            // here item.filter is used to filter out the state of search item shows in the search
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLocaleLowerCase())
            )}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        )}
      </div>
      <Footer n={items.length} />
    </div>
  );
}

export default App;
