import { FaAnglesUp } from "react-icons/fa6";
import css from "./ScrollButton.module.css";

export default function ScrollButton({ onClick, size }) {
  return (
    <button className={css.button} onClick={onClick}>
      <FaAnglesUp size={size} />
      To top
    </button>
  );
}
