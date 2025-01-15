import css from "./AppBar.module.css";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";

export default function AppBar() {
  return (
    <div className={css.header}>
      <Logo />
      <Navigation />
    </div>
  );
}
