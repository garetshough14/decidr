import "./AddItemStyle.css";
import { useState } from "react";

export default function AddItem({ listContainer, setListContainer }) {
  const [newItem, setNewItem] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    setListContainer([...listContainer, newItem]);
    setNewItem("");
  };
  return (
    <form className="form" onSubmit={formSubmit}>
      <input
        id="add-item"
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
        placeholder="Add a new item"
      />
      <button className="add-item-button" type="submit" onClick={formSubmit}>
        Add Item
      </button>
    </form>
  );
}
