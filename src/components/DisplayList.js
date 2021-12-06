export default function DisplayList({ listContainer }) {
  const displayList = listContainer.map((item, index) => (
    <>
    <li key={index}>{item}</li>
    <button>Delete</button>
    </>
  ));
  return(
      <ol>
          {displayList}
      </ol>
  )
}
