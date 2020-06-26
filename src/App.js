import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import Stats from "./components/Stats";
import { ItemProvider } from "./context/ItemContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ItemProvider>
        <ThemeToggle />
        <AddItem />
        <Stats />
        <ItemList />
      </ItemProvider>
    </div>
  );
}
