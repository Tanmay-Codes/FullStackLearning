import React from "react";
import { useRef } from "react";
export default function Form({ handleDelete,handleSubmit, newItem, setNewItem }) {
  const inputref = useRef();
  return (
    <div>

    <form onSubmit={handleSubmit}>
      <label>Item Name</label>
      <input
        type="text"
        autoFocus
        required
        ref={inputref}
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
      <button type="submit" onClick={() => inputref.current.focus()}>
        Add
      </button>
    </form>
    <button onClick={handleDelete}>clear</button>
        </div>
  );
}
