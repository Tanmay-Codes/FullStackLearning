import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function Content() {

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
    <div>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleChecked(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleChecked(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your Item List is Empty</p>
      )}
    </div>
  );
}

export default Content;
