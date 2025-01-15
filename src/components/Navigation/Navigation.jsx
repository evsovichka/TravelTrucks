import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink
        className={(props) => {
          return clsx(css.link, props.isActive && css.activeLink);
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(props) => {
          return clsx(css.link, props.isActive && css.activeLink);
        }}
        to="/catalog"
      >
        Catalog
      </NavLink>
    </nav>
  );
}
