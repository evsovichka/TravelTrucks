import css from "./PhotoList.module.css";

export default function PhotoList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((photo) => {
        return (
          <li className={css.item}>
            <img
              src={photo.original}
              alt="Camper's photo"
              className={css.img}
            />
          </li>
        );
      })}
    </ul>
  );
}
