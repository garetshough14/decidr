import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  const selectItem = () => {
    const random = Math.floor(Math.random() * listContainer.length);
    setSelectedItem(listContainer.length > 0 ? listContainer[random] : "");
  };

  return (
    <div className="App">
      <Header />
      <Content
        setListContainer={setListContainer}
        listContainer={listContainer}
        selectedItem={selectedItem}
      />
      <Footer selectItem={selectItem} setListContainer={setListContainer} />
    </div>
  );
}

export default App;
