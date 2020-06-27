import React, { useContext } from "react";
import ThemeToggle from "./components/ThemeToggle";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import Stats from "./components/Stats";
import { ItemProvider } from "./context/ItemContext";
import { ThemeContext } from "./context/ThemeContext";
import "./styles.css";

export default function App() {
  const [theme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`App ${theme}`}>
      <ItemProvider>
        <ThemeToggle />
        <AddItem />
        <Stats />
        <ItemList />
      </ItemProvider>
    </div>
  );
}
