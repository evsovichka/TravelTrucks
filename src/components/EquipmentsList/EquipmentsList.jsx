import React from "react";
import css from "./EquipmentsList.module.css";
import { useSelector } from "react-redux";
import { selectEquipment } from "../../redux/selectors";
import { toggleFeature } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";
import clsx from "clsx";

export default function EquipmentsList({ data }) {
  const isSelect = useSelector(selectEquipment);
  const dispath = useDispatch();
  const handleClick = (equipment) => {
    dispath(toggleFeature(equipment));
  };

  return (
    <div className={css.wrap}>
      <p className={css.title}>Vehicle equipment</p>
      <hr className={css.line}></hr>
      <ul className={css.list}>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => handleClick(item.value)}
              className={clsx(css.item, {
                [css.isActive]: isSelect[item.value],
              })}
            >
              <div>{React.cloneElement(item.icon)}</div>
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
