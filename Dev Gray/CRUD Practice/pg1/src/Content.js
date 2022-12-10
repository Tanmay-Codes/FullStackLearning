import React from "react";

export default function Content({ items }) {
  return (
    <div>
      {items.map((item) => (
        <li id={item.id}>{JSON.stringify(item)}</li>
      ))}
    </div>
  );
}
