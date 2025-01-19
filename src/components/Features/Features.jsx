import { useSelector } from "react-redux";
import CategoriesList from "../CategoriesList/CategoriesList.jsx";
import { selectCamperById } from "../../redux/selectors.js";
import VehicleDetailsList from "../VehicleDetailsList/VehicleDetailsList.jsx";
import css from "./Features.module.css";

export default function Features() {
  const camper = useSelector(selectCamperById);

  return (
    <div className={css.featuresBox}>
      <CategoriesList limit={0} item={camper} />
      <VehicleDetailsList data={camper} />
    </div>
  );
}
