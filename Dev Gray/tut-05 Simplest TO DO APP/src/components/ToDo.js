import React from "react";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import AddPlan from "./AddPlan";
export default function ToDo() {
  const listItems = [];
  const [items, setItems] = useState(listItems);
  const addItem = (element) => {
    setItems([
      ...items,
      {
        id: items.length ? items[items.length - 1].id + 1 : 1,
        text: element,
        done: false,
      },
    ]);
  };
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    addItem(newItem);
  };
  const handleClick = (id) => {
    const listupdate = items.map((item) =>
      id === item.id ? { ...item, done: !item.done } : item
    );
    setItems(listupdate);
  };
  const handledelete = () => {
    const listupdate = items.filter((item) => !item.done);
    setItems(listupdate);
    console.log(listupdate);
  };
  return (
    <div>
      <Header />
      <AddPlan
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        handledelete={handledelete}
      />
      <Content listItems={items} handleClick={handleClick} />
    </div>
  );
}
