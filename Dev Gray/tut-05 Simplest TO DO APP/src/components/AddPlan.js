import React from "react";

export default function AddPlan({
  newItem,
  setNewItem,
  handleSubmit,
  handledelete,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          autoFocus
          placeholder="Add Item here"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <button onClick={handledelete} >Clear</button>
    </div>
  );
}
