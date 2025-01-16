import LocationIcon from "../ui/icons/locationIcon.jsx";
import css from "./LocationInput.module.css";
import { selectLocation } from "../../redux/selectors.js";
import { useSelector } from "react-redux";
import { setLocation } from "../../redux/filtersSlice.js";
import { useDispatch } from "react-redux";

export default function LocationInput() {
  const location = useSelector(selectLocation);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setLocation(event.target.value));
  };

  const iconColor = location ? "#101828" : "#6C717B ";

  return (
    <div className={css.box}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <div className={css.inputWrap}>
        <div className={css.icon}>
          <LocationIcon color={iconColor} />
        </div>
        <input
          type="text"
          id="location"
          placeholder="City"
          className={css.input}
          onChange={handleChange}
        ></input>
      </div>
    </div>
  );
}
