import DisplayList from "./DisplayList"
import AddItem from "./AddItem"
export default function Content(props) {
    
    return(
        <main>
        <AddItem
          setListContainer={props.setListContainer}
          listContainer={props.listContainer}
        />
        {props.selectedItem.length > 0 ? (
          <p>{props.selectedItem}</p>
        ) : (
          <DisplayList 
            listContainer={props.listContainer} />
        )}
      </main>
    )
  }