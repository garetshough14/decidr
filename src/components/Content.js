import "./contentStyle.css";
import DisplayList from "./DisplayList";
import AddItem from "./AddItem";
export default function Content(props) {
  return (
    <main>
      <AddItem
        setListContainer={props.setListContainer}
        listContainer={props.listContainer}
      />
      {props.selectedItem.length > 0 ? (
        <div className="selected-item">
          <p className="space-between-button">{props.selectedItem}</p>
          <button> Done </button>
        </div>
      ) : (
        <DisplayList
          listContainer={props.listContainer}
          setListContainer={props.setListContainer}
        />
      )}
    </main>
  );
}
