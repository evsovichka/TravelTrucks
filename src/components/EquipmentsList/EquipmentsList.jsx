import React from "react";
import css from "./EquipmentsList.module.css";

export default function EquipmentsList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((item) => {
        return (
          <li key={item.id} className={css.item}>
            <div className={css.icon}>{React.cloneElement(item.icon)}</div>
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}
