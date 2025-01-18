import { useSelector } from "react-redux";
import CategoriesList from "../CategoriesList/CategoriesList";
import css from "./Features.module.css";
import { selectOneCamper } from "../../redux/selectors";
import VehicleDetailsList from "../VehicleDetailsList/VehicleDetailsList";

export default function Features() {
  const camper = useSelector(selectOneCamper);

  return (
    <div className={css.featuresBox}>
      <CategoriesList limit={0} item={camper} />
      <VehicleDetailsList data={camper} />
    </div>
  );
}
