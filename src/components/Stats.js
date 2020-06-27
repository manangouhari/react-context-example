import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { ThemeContext } from "../context/ThemeContext";

const Stats = () => {
  const [items] = useContext(ItemContext);
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`total ${theme}`}>
      There {items.length === 1 ? "is" : "are"} {items.length}{" "}
      {items.length === 1 ? "item" : "items"}.
    </div>
  );
};

export default Stats;
