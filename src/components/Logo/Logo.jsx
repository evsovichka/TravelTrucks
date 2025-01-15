import { Link } from "react-router-dom";
import LogoIcon from "../ui/icons/LogoIcon.jsx";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" className={css.logo}>
      <LogoIcon />
    </Link>
  );
}
