import clsx from "clsx";
import css from "./VehicleTypesList.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectForm } from "../../redux/selectors.js";
import { setForm } from "../../redux/filtersSlice.js";
import Line from "../ui/Line/Line.jsx";

export default function VehicleTypesList({ data }) {
  const selectedType = useSelector(selectForm);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    if (selectedType === value) {
      dispatch(setForm(null));
    } else {
      dispatch(setForm(value));
    }
  };

  return (
    <div className={css.wrap}>
      <p className={css.title}>Vehicle type</p>
      <Line />
      <ul className={css.list}>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <label
                className={clsx(css.item, {
                  [css.isActive]: selectedType === item.value,
                })}
              >
                <input
                  type="checkbox"
                  checked={selectedType === item.value}
                  onChange={() => handleChange(item.value)}
                  className={css.input}
                />
                <div>{React.cloneElement(item.icon)}</div>
                <p className={css.label}>{item.label}</p>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
