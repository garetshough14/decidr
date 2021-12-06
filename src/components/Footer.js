import "./FooterStyle.css";
import { Link } from "react-router-dom";
export default function Footer(props) {
  const clearList = () => {
    props.setListContainer([]);
  };
  return (
    <div className="container">
      <button className="button-style" onClick={props.selectItem}>
        Select An Item
      </button>
      <button className="button-style" onClick={clearList}>
        Clear List
      </button>
    </div>
  );
}
