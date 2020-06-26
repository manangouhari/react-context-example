import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

const Stats = () => {
  const [items] = useContext(ItemContext);
  return <div className="total">There are {items.length} items.</div>;
};

export default Stats;
