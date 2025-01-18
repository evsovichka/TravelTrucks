import { useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className={css.background}></div>
      <div className={css.wrapper}>
        <div className={css.wrapperText}>
          <h1 className={css.title}>Oops! Page Not Found</h1>
          <a className={css.link} onClick={handleClick}>
            Please return to the homepage
          </a>
        </div>
      </div>
    </>
  );
}
