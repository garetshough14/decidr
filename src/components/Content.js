import "./contentStyle.css";
import DisplayList from "./DisplayList";
import AddItem from "./AddItem";
export default function Content(props) {
  return (
    <main className='main-style'>
      <AddItem
        setListContainer={props.setListContainer}
        listContainer={props.listContainer}
      />
      <div className='content'>
      {props.selectedItem.length > 0 ? (
        <div className="selected-item">
          <p className="space-between-button">{props.selectedItem}</p>
          <button onClick={()=>props.setSelectedItem('')}> Done </button>
        </div>
      ) : (
        <DisplayList
          listContainer={props.listContainer}
          setListContainer={props.setListContainer}
        />
      )}
      </div>
    </main>
  );
}
