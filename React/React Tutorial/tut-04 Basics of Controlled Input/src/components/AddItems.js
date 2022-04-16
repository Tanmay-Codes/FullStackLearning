import React from "react";

export default function AddItems({handleSubmit, setnewItem, newItems}) {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItems}
        onChange = {(e) => setnewItem(e.target.value)}
      />
      <button
        style={{
          width: "50px",
          height: "20px",
          marginLeft: "20px",
        }}
        type="submit"
        aria-label="Add Item"
      >
        submit
      </button>
    </form>
  );
}
