import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import AddItem from './components/AddItem';

function App() {
  const [listContainer,setListContainer] = useState([]);

  console.log(listContainer)
  return (
    <div className="App">
      <header>
        Decidr
      </header>
      <AddItem
        listContainer={listContainer} 
        setListContainer = {setListContainer}
      />
    </div>
  );
}

export default App;
