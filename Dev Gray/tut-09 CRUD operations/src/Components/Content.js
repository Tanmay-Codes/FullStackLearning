import React, { useState } from "react";
import ItemList from "./ItemList";

function Content({ items, handleChecked, handleDelete }) {
  return (
    <div>
      {items.length ? (
        <ItemList
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your Item List is Empty</p>
      )}
    </div>
  );
}

export default Content;
