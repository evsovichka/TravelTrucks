import { useSelector } from "react-redux";
import CategoriesList from "../CategoriesList/CategoriesList.jsx";
import { selectOneCamper } from "../../redux/selectors.js";
import VehicleDetailsList from "../VehicleDetailsList/VehicleDetailsList.jsx";
import css from "./Features.module.css";

export default function Features() {
  const camper = useSelector(selectOneCamper);

  return (
    <div className={css.featuresBox}>
      <CategoriesList limit={0} item={camper} />
      <VehicleDetailsList data={camper} />
    </div>
  );
}
