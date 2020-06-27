import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

const Stats = () => {
  const [items] = useContext(ItemContext);
  return (
    <div className="total">
      There {items.length === 1 ? "is" : "are"} {items.length}{" "}
      {items.length === 1 ? "item" : "items"}.
    </div>
  );
};

export default Stats;
