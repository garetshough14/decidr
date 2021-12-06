import "./DisplayListStyle.css";
export default function DisplayList({ listContainer, setListContainer }) {
  const removeItem = (targetedItem) => {
    setListContainer(
      listContainer.filter((value, index) => index !== targetedItem)
    );
  };
  const displayList = listContainer.map((item, index) => (
    <div className="display-list">
      <li className='li-style'key={index}>{item}</li>
      <button className="delete-button" onClick={() => removeItem(index)}>
        Delete
      </button>
    </div>
  ));
  return (
    <div className="list-container">
      <ol>{displayList}</ol>
    </div>
  );
}
