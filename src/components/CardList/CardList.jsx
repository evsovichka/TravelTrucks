import CardListItem from "../CardListItem/CardListItem.jsx";
import css from "./CardList.module.css";

export default function CardList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((item) => {
        return (
          <li key={item.id} className={css.item}>
            <CardListItem data={item} />
          </li>
        );
      })}
    </ul>
  );
}
