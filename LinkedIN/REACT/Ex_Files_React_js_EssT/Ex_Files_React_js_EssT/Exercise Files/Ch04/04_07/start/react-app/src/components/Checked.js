import React, { useReducer } from "react";
const Checked = () => {
    const [checked, setchecked] = useReducer((checked)=> !checked, false)
  return (
    <div>
      <input type="checkbox" value={checked} onChange={setchecked}></input>
      <label>{checked ? "checked" : "unchecked"}</label>
    </div>
  );
};

export default Checked;
