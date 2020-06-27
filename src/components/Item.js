import React from "react";
import Cross from "../icons/Cross";
const Item = ({ item, removeItem, theme }) => {
  return (
    <div className={`item ${theme}`}>
      <div className="item--text">{item}</div>
      <button
        className="item--remove"
        onClick={() => {
          removeItem(item);
        }}
      >
        <Cross />
      </button>
    </div>
  );
};

export default Item;
