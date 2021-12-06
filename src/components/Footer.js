export default function Footer(props) {
    const clearList = () => {
        props.setListContainer([]);
    }
    return(
        <>
        <button
            onClick={props.selectItem}
        >
            Select An Item
        </button>
        <button 
            onClick={clearList}
        >Clear List</button>
        </>
    )
  }