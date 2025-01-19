import css from "./VehicleDetailsList.module.css";
import Line from "../ui/Line/Line.jsx";
export default function VehicleDetailsList({ data }) {
  return (
    <div className={css.wraper}>
      <p className={css.title}>Vehicle details</p>
      <Line />
      <ul className={css.list}>
        <li className={css.item}>
          <p>Form</p>
          <p>{data.form.charAt(0).toUpperCase() + data.form.slice(1)}</p>
        </li>
        <li className={css.item}>
          <p>Length</p>
          <p>{data.length}</p>
        </li>
        <li className={css.item}>
          <p>Width</p>
          <p>{data.width}</p>
        </li>
        <li className={css.item}>
          <p>Height</p>
          <p>{data.height}</p>
        </li>
        <li className={css.item}>
          <p>Tank</p>
          <p>{data.tank}</p>
        </li>
        <li className={css.item}>
          <p>Consumption</p>
          <p>{data.consumption}</p>
        </li>
      </ul>
    </div>
  );
}
