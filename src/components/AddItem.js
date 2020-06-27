import React, { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";
import { ThemeContext } from "../context/ThemeContext";
const AddItem = () => {
  const [items, setItems] = useContext(ItemContext);
  const [theme] = useContext(ThemeContext);
  const [itemText, setItemText] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    setItems(prevItems => {
      setItems([...prevItems, itemText]);
      setItemText("");
    });
  };
  return (
    <form onSubmit={handleSubmit} className="add-item">
      <input
        type="text"
        value={itemText}
        onChange={e => {
          setItemText(e.target.value);
        }}
        className="add-item--input"
      />
      <button className={`add-item--btn ${theme}`}>Add</button>
    </form>
  );
};

export default AddItem;
