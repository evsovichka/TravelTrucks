import clsx from "clsx";
import css from "./Button.module.css";

export default function Button(props) {
  const { children, style, onClick } = props;
  return (
    <button onClick={onClick} className={clsx(css.button, css[style])}>
      {children}
    </button>
  );
}
