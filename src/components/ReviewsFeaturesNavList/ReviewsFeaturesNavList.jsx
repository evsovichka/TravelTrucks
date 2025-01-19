import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Line from "../ui/Line/line.jsx";
import css from "./ReviewsFeaturesNavList.module.css";

export default function ReviewsFeaturesNavList() {
  return (
    <div className={css.wrapper}>
      <nav className={css.list}>
        <NavLink
          className={(props) => {
            return clsx(css.link, props.isActive && css.activeLink);
          }}
          to="features"
        >
          Features
        </NavLink>

        <NavLink
          className={(props) => {
            return clsx(css.link, props.isActive && css.activeLink);
          }}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <div className={css.line}>
        <Line />
      </div>
    </div>
  );
}
