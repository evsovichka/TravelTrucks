import css from "./PhotoList.module.css";

export default function PhotoList({ data, onOpen }) {
  return (
    <ul className={css.list}>
      {data.map((photo, index) => {
        return (
          <li className={css.item} key={index}>
            <img
              src={photo.original}
              alt="Camper's photo"
              className={css.img}
              onClick={() => onOpen(photo.original)}
            />
          </li>
        );
      })}
    </ul>
  );
}
