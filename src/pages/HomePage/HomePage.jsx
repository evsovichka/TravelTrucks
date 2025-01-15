import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <div className={css.background}></div>
      <div className={css.wrapper}>
        <div className={css.textWrapper}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <button className={css.button}>View Now</button>
      </div>
    </>
  );
}
