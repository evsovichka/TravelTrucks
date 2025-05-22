import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";
import Button from "../../components/ui/Button/Button.jsx";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <section className={css.section}>
      <div className={css.background}></div>
      <div className={css.wrapper}>
        <div className={css.textWrapper}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Button style="view" onClick={handleClick}>
          View Now
        </Button>
      </div>
    </section>
  );
}
