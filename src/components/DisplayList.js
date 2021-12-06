export default function DisplayList({ listContainer, setListContainer}) {
  const removeItem = (targetedItem) => {
    setListContainer(listContainer.filter((value, index) => index !== targetedItem));
};
  const displayList = listContainer.map((item, index) => (
    <>
    <li key={index}>{item}</li>
    <button
      onClick={() => removeItem(index)}
    >Delete</button>
    </>
  ));
  return(
      <ol>
          {displayList}
      </ol>
  )
}
