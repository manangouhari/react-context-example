import React, { useContext } from "react";
import Item from "./Item";
import { ItemContext } from "../context/ItemContext";
import { ThemeContext } from "../context/ThemeContext";

const ItemList = () => {
  const [items, setItems] = useContext(ItemContext);
  const [theme] = useContext(ThemeContext);
  const removeItem = item => {
    setItems(items.filter(it => it !== item));
  };
  return (
    <div className={`item-list ${theme}`}>
      {items.map(item => (
        <Item item={item} theme={theme} removeItem={removeItem} key={item} />
      ))}
    </div>
  );
};

export default ItemList;
